export default {

    getAllAnimals: () => {
        return fetch("http://localhost:5002/animals")
            .then(r => r.json())
    },
    getSingleAnimal: (id) => {
        return fetch(`http://localhost:5002/animals/${id}`)
            .then(r => r.json())
    },
    deleteAnimal: (id) => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
    }
}