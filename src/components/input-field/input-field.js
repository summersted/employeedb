import { CustomInput } from "./input-field-styles";

export default function InputField({ width, value = '', handler }) {
    return (
        <CustomInput 
        width={width} 
        defaultValue={value}
        onChange={handler} />
    )
}