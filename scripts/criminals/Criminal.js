export const Criminal = (criminalObj) => {   //makes a criminal into HTML represtentation
    return `
    <div class="criminal">
        <h5>${criminalObj.name}</h5>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term complete: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}