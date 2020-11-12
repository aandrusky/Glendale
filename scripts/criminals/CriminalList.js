
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".caseDataContainer")

let facilities = []
let criminalFacilities = []
let criminalArray = []


export const criminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            facilities = useFacilities()
            criminalFacilities = useCriminalFacilities()
            criminalArray = useCriminals()
            render()
            // console.log("this is my new render in criminalList()", criminalArray, crimFac, facilities)
        })
}

eventHub.addEventListener("criminalsClicked", () => {
    criminalList()
  })

eventHub.addEventListener("crimeSelected", event => {
    console.log("1 crimeSelected event happened", event.detail.crimeThatWasChosen)

    if (event.detail.crimeThatWasChosen !== 0) {

        const criminalsArray = useCriminals()
        console.log("2 array of criminals", criminalsArray)

        const convictionsArray = useConvictions()
        console.log("3 array of convictions", convictionsArray)

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })

        console.log("4 convictionThatWasChosen", convictionThatWasChosen)

        /*
         Now that we have the name of the chosen crime, filter the criminals application state down to the people that committed the crime
       */

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })

        criminalArray = filteredCriminalsArray
        render()

    }

})

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    // console.log("5 CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

    const criminalsArray = useCriminals()
    // console.log("6 criminalsArray", criminalsArray)
    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            // return criminalObj.arrestingOfficer === selectedOfficerName

            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
            }
            return false
        }
    )
    //   console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)
    //   console.log("7 CriminalList: Filtered list of criminals rendered to DOM")
    criminalArray = filteredArrayCriminals
    render()

})

// eventHub.addEventListener("facilitiesButtonClicked", facilityEventButtonObj => {
//     const 

// })

const render = () => {
    let criminalsHTMLRepresentations = ""
    // Step 1 - Iterate all criminals
    for (const criminal of criminalArray) {
  
      // Step 2 - Filter all relationships to get only ones for this criminal
      const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminal.id)
  
  
      // Step 3 - Convert the relationships to facilities with map()
      const matchedFacilities = facilityRelationshipsForThisCriminal.map(cf => {
        const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
        return matchingFacilityObject
      })
  
      // debugger
  
      criminalsHTMLRepresentations += Criminal(criminal, matchedFacilities)
  
    }
    criminalsContainer.innerHTML = `
          <h3>Glassdale Criminals</h3>
          <section class="criminalsList">
            ${criminalsHTMLRepresentations}
          </section>
        `
}


