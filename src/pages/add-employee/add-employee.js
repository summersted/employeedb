import DropdownInput from "../../components/dropdown-input";
import InputField from "../../components/input-field";
import Textarea from "../../components/text-area";
import Button from "../../components/button"
import { ButtonGroup } from "../../components/button/button-styles";
import { addEmployee } from "../../services";
import { useNavigate } from "react-router-dom";
import useEmployee from "../../helpers/employee.hook";
import { useEffect, useState } from "react";

export default function AddEmployee() {
    const [formState, setFormState] = useState({});
    const {
        department,
        fullName,
        notes,
        changeNameHandler,
        changeDepartHandler,
        changeNotesHandler
    } = useEmployee(formState);

    useEffect(() => {
        setFormState({
            department,
            fullName,
            notes,
            changeNameHandler,
            changeDepartHandler,
            changeNotesHandler
        })
    }, []);

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

    function submitHandler() {
        const filled = department && fullName && notes;

        if (filled) {
            addEmployee({
                department,
                name: fullName,
                notes
            });
            navigate('/');
        } else {
            alert('Please, fill the form!')
        }
    }

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
            <Textarea
                handler={changeNotesHandler} />
            <ButtonGroup {...btnGroupOptions}>
                <Button
                    buttonOptions={AddButtonOptions}
                    handler={submitHandler} />
                <Button
                    buttonOptions={CancelButtonOptions}
                    handler={cancelHandler} />
            </ButtonGroup>
        </>
    )
}