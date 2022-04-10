export const getEmployees = async () => {
    try {
        const res = await fetch('/api/employees', {
            method: 'GET'
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}
export const getEmployee = async (id) => {
    try {
        const res = await fetch(`/api/employees/${id}`, {
            method: 'GET'
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}

export const addEmployee = async (body) => {
    try {
        const res = await fetch('/api/employees', {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}

export const editEmployee = async (id, body) => {
    try {
        const res = await fetch(`/api/employees/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(body)
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}

export const removeEmployee = async (id) => {
    try {
        const res = await fetch(`/api/employees/${id}`, {
            method: 'DELETE'
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}

export const filterEmployees = async (querry) => {
    try {
        const res = await fetch(`/api/filterEmployees`, {
            method: 'POST',
            body: JSON.stringify(querry)
        })
            .then(data => data.json());
        return res;
    } catch (error) {
        console.warn(error)
    }
}