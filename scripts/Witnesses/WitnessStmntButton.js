const contentTarget = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {  //WHAT DOES THIS DO


    //WHAT DOES THIS DO
    contentTarget.innerHTML = ` 
    <button id="display-witnesses-button">Witness Statements</button>
    `
}
//(step 1)listens for user input click
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-witnesses-button") {
        console.log("witness statement button was clicked")
        const witnessButtonClicked = new CustomEvent("witnessClicked")

        eventHub.dispatchEvent(witnessButtonClicked)
    }
})


