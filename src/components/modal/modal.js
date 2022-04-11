import { removeEmployee } from "../../services";
import { ButtonGroup } from "../button/button-styles";
import {
    ModalContent,
    ModalWindow,
    ModalHeader,
    ModalText,
    ModalTitle,
    ModalCloseButton,
    ModalButton
} from "./modal-styles";

export default function Modal({ isActive, closeHandler, reloader, target}) {
    const btnGroupOptions = {
        width: '180px',
        justify: 'space-between',
        margins: '0 10px 0 10px'
    };

    const onDelete = () => {
        removeEmployee(target);
        closeHandler();
        reloader();
    }
    return (
        <ModalWindow active={isActive} onClick={closeHandler}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Are you sure?</ModalTitle>
                    <ModalCloseButton></ModalCloseButton>
                </ModalHeader>
                <ModalText>You realy wana delete this perfect record???</ModalText>
                <ButtonGroup {...btnGroupOptions}>
                    <ModalButton onClick={closeHandler}>Cancel</ModalButton>
                    <ModalButton onClick={onDelete}>OK</ModalButton>
                </ButtonGroup>
            </ModalContent>
        </ModalWindow>
    )
}