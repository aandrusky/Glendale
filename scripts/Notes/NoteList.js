import { noteAsHTML } from './NotesHTMLConverter.js';
import { getNotes, useNotes, deleteNote } from './NotesDataProvider.js'
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

eventHub.addEventListener("click", clickEvent => {
  // console.log(clickEvent, "id?")
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--")

    /*
        Invoke the function that performs the delete operation.
        Once the operation is complete you should THEN invoke
        useNotes() and render the note list again.
    */
    deleteNote(id).then(
      () => {
        const updatedNotes = useNotes()
        const criminals = useCriminals()
        render(updatedNotes, criminals)
      }
    )
  }
})
