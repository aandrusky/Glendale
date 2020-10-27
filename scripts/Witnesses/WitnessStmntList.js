
import { getWitnessStatements, useWitnessStatements } from "./WitnessStmntProvider.js"
import { WitnessStatement } from "./WitnessStmnt.js";

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".caseDataContainer")


eventHub.addEventListener("witnessesClicked", () => {

    console.log("heard that the user clicked the witness button")

    WitnessesList()
})


const WitnessesList = () => {

    getWitnessStatements()
        .then(() => {
            const witnessesArray = useWitnessStatements()
            console.log(witnessesArray)
            render(witnessesArray)
        })
}

const render = (witnessStatementArray) => {
    let witnessStatementHTMLRepresentations = ""
    for (const witness of witnessStatementArray) {

        witnessStatementHTMLRepresentations += WitnessStatement(witness)

        witnessesContainer.innerHTML = `
    <h3>Glassdale Witnesses</3>
    <section class="witnessesList">
        ${witnessStatementHTMLRepresentations}
    </section>
    `
    }
}
