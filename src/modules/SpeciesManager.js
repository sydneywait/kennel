export default {
    getAllSpecies: () => {
        return fetch("http://localhost:5002/species")
            .then(r => r.json())
    }
}

