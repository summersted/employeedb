import { useEffect, useState } from "react";

const useEmployee = (init = {}) => {
    const [department, setDepart] = useState('');
    const [fullName, setFullName] = useState('');
    const [notes, setNotes] = useState('');

    useEffect( () => {
        setDepart(init.department)
        setFullName(init.name)
        setNotes(init.notes)
    }, [init])


    return {
        department,
        fullName,
        notes,
        changeNameHandler : (e) => setFullName(e.target.value),
        changeDepartHandler : (e) => setDepart(e.target.value),
        changeNotesHandler : (e) => setNotes(e.target.value)
    }
}

export default useEmployee;