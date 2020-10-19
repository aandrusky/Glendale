

import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalsHTMLRepresentations = ""
            for (const criminal of criminalArray) {

                criminalsHTMLRepresentations += Criminal(criminal)

                criminalsContainer.innerHTML = `
            <h3>Glassdale Criminals</3>
            <section class="criminalsList">
                ${criminalsHTMLRepresentations}
            </section>
            `
            }
        })
}