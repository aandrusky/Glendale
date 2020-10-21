import { getConvictions, useConvictions } from "./ConvictionProvider.js"

/*
Which element in your HTML contains all components?
That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")
//console.log(eventHub)

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")



export const convictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
        convictionsObj => {
            return `<option value="${convictionsObj.id}">${convictionsObj.name}</option>`
        }
    ).join("")
    }
        </select>
    `
}

eventHub.addEventListener("change", (changeEvent) => {
    //  console.log(changeEvent)

    if (changeEvent.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})
