

import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".caseDataContainer")



export const criminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)

            // let criminalsHTMLRepresentations = ""
            // for (const criminal of criminalArray) {
                    
            //     criminalsHTMLRepresentations += Criminal(criminal)
            // }

            //     criminalsContainer.innerHTML = `
            // <h3>Glassdale Criminals</3>
            // <section class="criminalsList">
            //     ${criminalsHTMLRepresentations}
            // </section>
            // `
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
    console.log("5 CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

    const criminalsArray = useCriminals()
    console.log("6 criminalsArray", criminalsArray)
    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            // return criminalObj.arrestingOfficer === selectedOfficerName
      
            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
              }
              return false
            }
          )
          console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)

        render(filteredArrayCriminals)
        console.log("7 CriminalList: Filtered list of criminals rendered to DOM")
})
   
   const render = (criminalsArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalsArray) {

        criminalsHTMLRepresentations += Criminal(criminal)

        criminalsContainer.innerHTML = `
    <h3>Glassdale Criminals</3>
    <section class="criminalsList">
        ${criminalsHTMLRepresentations}
    </section>
    `
    }
}
