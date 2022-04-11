import { useEffect, useState } from "react";

import DropdownInput from "../../components/dropdown-input";
import InputField from "../../components/input-field";
import Textarea from "../../components/text-area";
import Button from "../../components/button"
import { ButtonGroup } from "../../components/button/button-styles";
import { getEmployee, editEmployee } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
    const {id} = useParams();
    const [department, setDepart] = useState('');
    const [fullName, setFullName] = useState('');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getEmployee(id).then( (res) => {
            const {employee} = res;

            setDepart(employee?.department);
            setFullName(employee?.name);
            setNotes(employee?.notes ?? 'nothing here')
        })
    },[id])

    const AddButtonOptions = {
        text: 'Save',
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

    function submitClosure(id, department, fullName, notes) {
        const obj = {
            department,
            name: fullName,
            notes
        }
        return function () {
            const filled = obj.department && obj.name && obj.notes
            if (filled) {
                editEmployee(id, obj);
                navigate('/');
            } else {
                alert('Please, fill the form!')
            }
        }
    }
    
    const submitHandler = submitClosure(id, department, fullName, notes);
    const cancelHandler = () => navigate('/');

    return (
        <>
            <p>Department:</p>
            <DropdownInput
                width='600px'
                value={department}
                handler={changeDepartHandler} />
            <p>Full name:</p>
            <InputField
                width={'590px'}
                value={fullName}
                handler={changeNameHandler} />
            <p>Notes:</p>
            <Textarea value={notes} handler={changeNotesHandler} />
            <ButtonGroup {...btnGroupOptions}>
                <Button buttonOptions={AddButtonOptions} handler={submitHandler} />
                <Button buttonOptions={CancelButtonOptions} handler={cancelHandler}/>
            </ButtonGroup>
        </>
    )
}