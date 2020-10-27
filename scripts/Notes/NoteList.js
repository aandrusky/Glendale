import { noteAsHTML } from './NotesHTMLConverter.js';
import {getNotes, useNotes} from './NotesDataProvider.js'



const notesContainer = document.querySelector(".notesContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => noteList())


export const noteList = () => {
    getNotes()
    .then(() => {
    const allNotes = useNotes()
    // console.log("all notes", allNotes)
    render(allNotes)

    })
}


const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
      notesHTMLRepresentations += noteAsHTML(note)
    }
    notesContainer.innerHTML = `
              ${notesHTMLRepresentations}
          `
  }
