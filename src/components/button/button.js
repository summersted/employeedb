import { WrappedButton } from "./button-style";

export default function Button({ buttonOptions }) {

    const options = {
        ...buttonOptions,
        text_color: buttonOptions?.background_color === '#008cff' ? 'white' : 'black'
    }
    console.log(options);
    return (
        <WrappedButton {...options}>{buttonOptions?.text}</WrappedButton>
    )
}