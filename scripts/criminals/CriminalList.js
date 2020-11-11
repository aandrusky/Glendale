
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".caseDataContainer")



export const criminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminalArray = useCriminals()

            render(criminalArray, facilities, crimFac)
            
            // console.log("this is my new render in criminalList()", criminalArray, crimFac, facilities)
        })
    }

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

    render(filteredCriminalsArray)

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
        render(filteredArrayCriminals)
        
})

eventHub.addEventListener("facilitiesButtonClicked", facilityEventButtonObj => {
    const 

})
   
const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    // console.log(criminalsToRender, allFacilities, allRelationships)
    criminalsContainer.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
            // console.log(facilityRelationshipsForThisCriminal, allRelationships)
            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => { const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                // console.log("what is this", matchingFacilityObject)
                return matchingFacilityObject
            })
            //  console.log("yay my facilities are filled", facilities)
            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
           
        }
    ).join("")
}


