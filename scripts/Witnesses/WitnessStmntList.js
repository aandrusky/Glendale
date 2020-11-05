
import { getWitnessStatements, useWitnessStatements } from "./WitnessProvider.js"
import { WitnessStatement } from "./WitnessStmnt.js";

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".caseDataContainer") //this is references below for rendered DOM placement


eventHub.addEventListener("witnessClicked", () => {
 //(step 2) listens for witness clicked from button module addeventlistener
    console.log("heard that the user clicked the witness button")

    WitnessesList() //hoisted from  definition below.
})


const WitnessesList = () => {

    getWitnessStatements()  //<-- this is what we used to get the data from the api and make it usable. This function parsed and primed our array.
        .then(() => {
            const witnessesArray = useWitnessStatements()
            console.log(witnessesArray)
            render(witnessesArray)
        })
}

const render = (witnessStatementArray) => {   //render loops through array of witnesses, pulling each one from witnessStmnt. loads them into witnessStatementHTMLRepresentations and puts them in dom. this both creates the html and pastes it into dom
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
