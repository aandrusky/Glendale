import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { FacilityHTML } from "./FacilityHTMLConverter.js";

const eventHub = document.querySelector(".container")
const facilitiesContainer  = document.querySelector(".caseDataContainer") //this is references below for rendered DOM placement

let facilities = []
let crimFac = []
let criminals = []

eventHub.addEventListener("facilitiesButtonClicked", () => {
 //(step 2) listens for witness clicked from button module addeventlistener
    console.log("heard that the user clicked the FACILITY button")

    FacilitiesList() //hoisted from  definition below.
})


const FacilitiesList = () => {

    getFacilities()  //<-- this is what we used to get the data from the api and make it usable. This function parsed and primed our array.
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()

      render()
        })
}

const render = () => {   //render loops through array of witnesses, pulling each one from witnessStmnt. loads them into witnessStatementHTMLRepresentations and puts them in dom. this both creates the html and pastes it into dom
    facilitiesContainer.innerHTML = `
          <h3>Glassdale Facilities</h3>
          <section class="facilitiesList">
            ${facilities.map(facility => {
    const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
    const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
      const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
      return matchingCriminalObj
    })
    return FacilityHTML(facility, criminalsAtThisFacility)
  }).join("")
    }
          </section>
        `
}
