import { DropdownFormElement, DropdawnSelectElement } from "./dropdown-input-styles";

export default function DropdownInput({width}) {
    return (
        <DropdownFormElement width={width}>
            <DropdawnSelectElement name="department">
                <option value="none">Select department</option>
                <option value="development">Development</option>
                <option value="management">Management</option>
                <option value="qa">QA</option>
            </DropdawnSelectElement>
        </DropdownFormElement>
    )
}