export default {
    getAllOwners: () => {
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
    editOwner(editedOwner) {
        return fetch(`http://localhost:5002/owners/${editedOwner.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedOwner)
        }).then(data => data.json());
      },
    addNewOwner(newOwner) {
        return fetch("http://localhost:5002/owners", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(data => data.json())

    },

    patchOwner: (patchItem, id) => {
        return fetch(`http://localhost:5002/owners/${id}`, {
    method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchItem)
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
    }
}