export default {
    getAllResources: (route) => {
        return fetch(`http://localhost:5002/${route}`)
            .then(r => r.json())
    },

    getSingleResource: (id, route) => {
        return fetch(`http://localhost:5002/${route}/${id}`)
            .then(r => r.json())
    },
    deleteResource: (id, route) => {
        return fetch(`http://localhost:5002/${route}/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/${route}`))
            .then(e => e.json())
    },
    editResource(editedResource, route) {
        return fetch(`http://localhost:5002/${route}/${editedResource.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedResource)
        }).then(data => data.json());
      },
    addNewResource(newResource, route) {
        return fetch(`http://localhost:5002/${route}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newResource)
        }).then(data => data.json())

    },

    patchResource: (patchItem, id, route) => {
        return fetch(`http://localhost:5002/${route}/${id}`, {
    method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchItem)
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/${route}`))
            .then(e => e.json())
    }
}