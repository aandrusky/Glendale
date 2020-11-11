import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")
const facilityContainer = document.querySelector(".facilityContainer") //this is references below for rendered DOM placement


eventHub.addEventListener("facilitiesButtonClicked", () => {
 //(step 2) listens for witness clicked from button module addeventlistener
    console.log("heard that the user clicked the FACILITY button")

    FacilitiesList() //hoisted from  definition below.
})


const FacilitiesList = () => {

    getFacilities()  //<-- this is what we used to get the data from the api and make it usable. This function parsed and primed our array.
        .then(() => {
            const facilitiesArray = useFacilities()
            console.log("this is my array of FACILITIES", facilitiesArray)
            render(facilitiesArray)
        })
}

const render = (facilitiesArray) => {   //render loops through array of witnesses, pulling each one from witnessStmnt. loads them into witnessStatementHTMLRepresentations and puts them in dom. this both creates the html and pastes it into dom
    let facilityHTMLRepresentations = ""
    for (const facility of facilitiesArray) {

        facilityHTMLRepresentations += FacilityHTML(facility)

        facilityContainer.innerHTML = `
    <h3>Glassdale Facilities</3>
    <section class="facilityList">
        ${facilityHTMLRepresentations}
    </section>
    `
    }
}
