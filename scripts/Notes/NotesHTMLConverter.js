

export const noteAsHTML = (noteObj, criminalObject) => {
    return `
    <div class="note">
        <h5>Author: ${noteObj.author}</h5>
        <p>Suspect: ${criminalObject.name}</p>
        <p>Date of Interview: ${noteObj.dateOfInterview}</p>
        <p>Time Note Entered: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObj.note}</p>
    </div>
    `
}