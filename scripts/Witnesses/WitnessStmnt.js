export const WitnessStatement = (witness) => {
    return `
    <div class ="witness">
        <h5>${witness.name}</h5>
        <p>${witness.statements}</p>
    </div>
    `
}