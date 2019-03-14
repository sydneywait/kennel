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
    },
    addNewEmployee(newEmployee) {
        return fetch("http://localhost:5002/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())

    },
    editEmployee(editedEmployee) {
        return fetch(`http://localhost:5002/employees/${editedEmployee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
      }


}
