export default {

    getAllAnimals: () => {
        return fetch("http://localhost:5002/animals/?_expand=species&_expand=owner")
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
            .then(() => fetch(`http://localhost:5002/animals/?_expand=species&_expand=owner`))
            .then(e => e.json())
    },
    addNewAnimal(newAnimal) {
        return fetch(`http://localhost:5002/animals`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimal)
        }).then(data => data.json())
      }
}