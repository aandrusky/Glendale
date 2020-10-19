import { getConvictions, useConvictions } from "./ConvictionProvider.js"

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