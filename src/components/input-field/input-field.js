import { CustomInput } from "./input-field-styles";

export default function InputField({width, handler}) {
    return(
        <CustomInput width={width} onChange={handler}/>
    )
}