import { saveNote } from "./NotesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



const render = () => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" placeholder="Your name here" type="text"/>
        <input id="note--suspect" placeholder="Suspect name here"type="text"/>
        <textarea id="note--note" placeholder="Your note here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
              // takes our user input VALUES (.VALUE)
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

        // takes all that data from the input, and puts it into one spot, or 'object' (newNote)

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            suspect,
            note
        }

        // Then this will POST our object (newNote) to our API / json 
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    render()
}