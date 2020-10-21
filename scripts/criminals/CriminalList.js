

import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./convictions/ConvictionProvider.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

const eventHub = document.querySelector(".container")

export const criminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalsHTMLRepresentations = ""
            for (const criminal of criminalArray) {
                    
                criminalsHTMLRepresentations += Criminal(criminal)
            }

                criminalsContainer.innerHTML = `
            <h3>Glassdale Criminals</3>
            <section class="criminalsList">
                ${criminalsHTMLRepresentations}
            </section>
            `
        })
}

eventHub.addEventListener("crimeSelected", event => {
    console.log("1 crimeSelected event happened", event.detail.crimeThatWasChosen)

    if (event.detail.crimeThatWasChosen !== 0) {

    const criminalArray = useCriminals()
    console.log("2 array of criminals", criminalArray)

    const convictionsArray = useConvictions()
    console.log("3 array of convictions", convictionsArray)

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        return convictionObj.id === event.detail.crimeThatWasChosen
    })

    console.log("4 convictionThatWasChosen", convictionThatWasChosen)

    const filteredCriminalsArray = criminalArray.filter(criminalObj => {
        return criminalObj.name === convictionThatWasChosen.name
    })

    render(filteredCriminalsArray)

    }
    
})

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

    const criminalsArray = useCriminals()
    console.log("criminalsArray", criminalsArray)
    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            return criminalObj.arrestingOfficer === selectedOfficerName
        }
    )
        console.log("CriminalList: Array of criminals filtered for only criminals that were arrested by selected officer", selectedOfficerName)

        render(filteredArrayCriminals)
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
