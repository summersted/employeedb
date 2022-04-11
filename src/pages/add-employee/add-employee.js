import { useState } from "react";

import DropdownInput from "../../components/dropdown-input";
import InputField from "../../components/input-field";
import Textarea from "../../components/text-area";
import Button from "../../components/button"
import { ButtonGroup } from "../../components/button/button-styles";
import { addEmployee } from "../../services";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const [department, setDepart] = useState('');
    const [fullName, setFullName] = useState('');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    const AddButtonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '150px',
        element_height: '50px'
    }

    const CancelButtonOptions = {
        text: 'Cancel',
        element_width: '150px',
        element_height: '50px'
    }

    const btnGroupOptions = {
        width: '310px',
        justify: 'space-between'
    }

    const changeNameHandler = (e) => setFullName(e.target.value);
    const changeDepartHandler = (e) => setDepart(e.target.value);
    const changeNotesHandler = (e) => setNotes(e.target.value);

    function submitClosure(department, fullName, notes) {
        const obj = {
            department,
            name: fullName,
            notes
        }
        return function () {
            const filled = obj.department && obj.name && obj.notes
            if (filled) {
                addEmployee(obj);
                navigate('/');
            } else {
                alert('Please, fill the form!')
            }
        }
    }

    const submitHandler = submitClosure(department, fullName, notes);
    const cancelHandler = () => navigate('/');

    return (
        <>
            <p>Department:</p>
            <DropdownInput
                width='600px'
                handler={changeDepartHandler} />
            <p>Full name:</p>
            <InputField
                width={'590px'}
                handler={changeNameHandler} />
            <p>Notes:</p>
            <Textarea handler={changeNotesHandler} />
            <ButtonGroup {...btnGroupOptions}>
                <Button buttonOptions={AddButtonOptions} handler={submitHandler} />
                <Button buttonOptions={CancelButtonOptions} handler={cancelHandler} />
            </ButtonGroup>
        </>
    )
}