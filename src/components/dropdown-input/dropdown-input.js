import { DropdownFormElement, DropdawnSelectElement } from "./dropdown-input-styles";

export default function DropdownInput({ width, value, handler }) {
    return (
        <DropdownFormElement width={width}>
            <DropdawnSelectElement
                name="department"
                width={width}
                value={value}
                onChange={handler}>
                <option value="none">Select department</option>
                <option value="Development">Development</option>
                <option value="Management">Management</option>
                <option value="QA">QA</option>
            </DropdawnSelectElement>
        </DropdownFormElement>
    )
}