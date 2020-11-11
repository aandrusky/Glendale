const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj, facilityObj) => {   //makes a criminal into HTML represtentation
    return `
    <div id="criminal-${criminalObj.id}" class="criminal">
        <h5>${criminalObj.name}</h5>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term complete: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <div>
            <h2>Facilities</h2>
                <ul>
                    ${facilityObj.map(facilityItem => `<li>${facilityItem.facilityName}</li>`).join("")}
                </ul>
        </div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </div>
    `
}

eventHub.addEventListener("click", (eventObj) => {

    //split id of the alibi button! <each button actually renders in with unique ID's. so we need to separate them. 
    const [nameOfId, criminalId] = eventObj.target.id.split("--")

    //check if button that was clicked WAS the alibi button at all
    if (eventObj.target.id.startsWith("associates--")) {
        console.log("button was clicked", nameOfId, criminalId)
        //build a custom event
        const myCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })
        //now ,dispatch event to event hub so that other modules can listen for this event
        eventHub.dispatchEvent(myCustomEvent)
    }
})