import { saveNote } from "./NotesDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



const render = (arrayOfCriminals) => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" placeholder="Your name here" type="text"/>
        <select id="note--criminal" class="criminalSelect">
        <option value="0">Select Criminal...</option>
        ${
            arrayOfCriminals.map(criminal => {
              return `<option value="${ criminal.id }">${ criminal.name }</option>`
            }).join("")
        }    
        </select>
        <textarea id="note--note" placeholder="Your note here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
              // takes our user input VALUES (.VALUE)
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const criminalId = parseInt(document.querySelector("#note--criminal").value)
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

        // takes all that data from the input, and puts it into one spot, or 'object' (newNote)

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId,
            note
        }

        // Then this will POST our object (newNote) to our API / json 
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const listOfCriminals = useCriminals()
        render(listOfCriminals)
    })
    
}