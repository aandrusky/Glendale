let witnesses = []  //<stores witness api from getWitnesses

export const getWitnessStatements = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(
            response => response.json())
        .then(
            parsedWitnessesStatements => {
                console.table(parsedWitnessesStatements)
                witnesses = parsedWitnessesStatements
            }
        )
}

export const useWitnessStatements = () => {  //<uses array^ for later use in code
    return witnesses.slice()
}