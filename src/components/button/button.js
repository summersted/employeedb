import { WrappedButton } from "./button-styles";

export default function Button({ buttonOptions, handler }) {
    const options = {
        ...buttonOptions,
        text_color: buttonOptions?.background_color === '#008cff' ? 'white' : 'black'
    }
    return (
        <WrappedButton {...options}
            onClick={(e) => { e.preventDefault(); handler(); }}>
            {buttonOptions?.text}</WrappedButton>
    )
}