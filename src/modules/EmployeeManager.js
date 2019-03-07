export default {
    getAllEmployees: () => {
        return fetch("http://localhost:5002/employees")
            .then(r => r.json())
    },

    getSingleEmployee: (id) => {
        return fetch(`http://localhost:5002/employees/${id}`)
            .then(r => r.json())
    },
    deleteEmployee: (id) => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
    }

}
