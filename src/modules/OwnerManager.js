export default {
    getAllOwners: ()=>{
    return fetch("http://localhost:5002/owners")
        .then(r => r.json())
    },

    getSingleOwner: (id) => {
        return fetch(`http://localhost:5002/owners/${id}`)
            .then(r => r.json())
    },
    deleteOwner: (id) => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
    },
    editOwner: (id) => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "PATCH"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
    },
    addOwner: (id) => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "POST"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
    },
}