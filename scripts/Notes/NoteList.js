import { noteAsHTML } from './NotesHTMLConverter.js';
import { getNotes, useNotes } from './NotesDataProvider.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'



const notesContainer = document.querySelector(".notesContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => noteList())



export const noteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notes = useNotes()
      const criminals = useCriminals()

      render(notes, criminals)
    })
}



const render = (notesArray, criminalsArray) => {
  let notesHTMLRepresentations = ""
  for (const note of notesArray) {
    const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
    notesHTMLRepresentations += noteAsHTML(note, relatedCriminal)
  }
  notesContainer.innerHTML = `
               ${notesHTMLRepresentations}
           `
}
