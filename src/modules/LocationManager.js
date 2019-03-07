export default {
    getAllLocations: () => {
        return fetch("http://localhost:5002/locations")
            .then(r => r.json())
    },
    getSingleLocation: (id) => {
        return fetch(`http://localhost:5002/locations/${id}`)
            .then(r => r.json())
    },
    deleteLocation: (id) => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/locations`))
            .then(e => e.json())
    }
}