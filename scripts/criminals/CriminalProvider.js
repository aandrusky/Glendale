let criminals = []  //<stores criminal api from getCriminals

export const useCriminals = () => {  //<uses array^ for later use in code
    return criminals.slice()
}


export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(
            response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}