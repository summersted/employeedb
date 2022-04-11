import { CustomInput } from "./input-field-styles";

export default function InputField({
    width,
    value = '',
    handler,
    type = 'text',
    placeholder = ''
}) {
    return (
        <CustomInput
            width={width}
            defaultValue={value}
            type={type}
            placeholder={placeholder}
            onChange={handler} />
    )
}