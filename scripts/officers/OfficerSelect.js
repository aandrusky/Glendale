import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")
// console.log("OfficersSelect: getting reference to container for dropdown and eventHub")

export const OfficerSelect = () => {
    // console.log("OfficerSelect: Get data from API and render dropdown to the DOM")

    getOfficers()
        .then(() => {
            const officersArray = useOfficers()
            // console.log("officersArrays", officersArray)

            render(officersArray)

        })
}

const render = (officers) => {
    officersFilterContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
        officersObj => {
            return `<option value="${officersObj.name}">${officersObj.name}</option>`
        }
    ).join("")
        }
        </select>
    `
}


eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        console.log("officerSelect: Change event happened in the officers dropdown")
        
        console.log("OfficerSelect: Build custom event for officerSelected")
        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
        console.log("OfficerSelect: Dispatch officerSelected event to event hub")
        eventHub.dispatchEvent(officerSelectedEvent)
    }
})