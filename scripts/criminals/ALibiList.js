//get all alibis related to a single criminal and show it in a list.
import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

export const createAlibiEventListener = () => {
eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    //show alibis for selected criminal
    console.log("I'm listening! here is:", eventObj.detail.criminalId)
    //need to find the one criminal whose id matches the criminalId sent in the event
    const arrayOfCriminals = useCriminals()

    const foundCriminal = arrayOfCriminals.find((criminalObj) => {
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })
    console.log("found criminal", foundCriminal)
    //add that criminal's alibis to the criminal card for MVP
    // const alibisForFoundCriminal = foundCriminal.known_associates
    AlibiList(foundCriminal)

    // AlibiList(alibisForFoundCriminal)
})
}
//adds a list of alibis to the criminal card
 const AlibiList = (criminalObj) => {
    //html for all the alibis
    render(criminalObj)
}

//let make a render method for adding alibis
const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)

    contentTarget.innerHTML +=
    `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
        return `
            <p>${alibiObj.name}</p>
            <p>${alibiObj.alibi}</p>
            `
    }).join("")}
    </div>
    `
}


