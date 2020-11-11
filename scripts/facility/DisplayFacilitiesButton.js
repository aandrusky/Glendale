const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const renderFacilityButton = () => {  //WHAT DOES THIS DO


    //WHAT DOES THIS DO
    contentTarget.innerHTML = ` 
    <button id="display-facilities-button">Show Facilities</button>
    `
}
//(step 1)listens for user input click
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-facilities-button") {
        console.log("facility button was clicked")
        const facilityButtonClicked = new CustomEvent("facilityClicked")

        eventHub.dispatchEvent(facilityButtonClicked)
    }
})

