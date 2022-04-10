import { useEffect, useState } from "react";

import DropdownInput from "../../components/dropdown-input";
import InputField from "../../components/input-field";
import Textarea from "../../components/text-area";
import Button from "../../components/button"
import { ButtonGroup } from "../../components/button/button-styles";

export default function AddEmployee() {
    const [depart, setDepart] = useState('');
    const [fullName, setFullName] = useState('');
    const [notes, setNotes] = useState('');

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

    const changeNameHandler = (e) => {
        setFullName(e.target.value);
    }

    const changeDepartHandler = (e) => {
        setDepart(e.target.value);
    }

    const changeNotesHandler = (e) => {
        setNotes(e.target.value);
    }

    function submitClosure(depart, fullName, notes) {
        const obj = {
            depart,
            fullName,
            notes
        }
        return function () {
            //do POST here
        }
    }
    const submitHandler = submitClosure(depart, fullName, notes);

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
                <Button buttonOptions={CancelButtonOptions} />
            </ButtonGroup>
        </>
    )
}