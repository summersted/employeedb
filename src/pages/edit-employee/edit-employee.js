import { useEffect, useState } from "react";

import DropdownInput from "../../components/dropdown-input";
import InputField from "../../components/input-field";
import Textarea from "../../components/text-area";
import Button from "../../components/button"
import { ButtonGroup } from "../../components/button/button-styles";
import { getEmployee, editEmployee } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import useEmployee from "../../helpers/employee.hook";

export default function EditEmployee() {
    const [initForm, setInitForm] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getEmployee(id).then((res) => {
            const { employee } = res;
            setInitForm({
                department: employee?.department,
                name: employee?.name,
                notes: employee?.notes ?? 'nothing here'
            })
        })
    }, []);

    const {
        department,
        fullName,
        notes,
        changeNameHandler,
        changeDepartHandler,
        changeNotesHandler
    } = useEmployee(initForm);

    const navigate = useNavigate();

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

    function submitHandler() {
        const filled = department && fullName && notes;

        if (filled) {
            editEmployee(id, {
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
                value={department}
                handler={changeDepartHandler} />
            <p>Full name:</p>
            <InputField
                width={'590px'}
                value={fullName}
                handler={changeNameHandler} />
            <p>Notes:</p>
            <Textarea
                value={notes}
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