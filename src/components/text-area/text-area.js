import { CustomTextarea } from "./text-area-styles"
export default function Textarea({ value ='', handler }) {
    return (
        <>
            <CustomTextarea
                defaultValue={value}
                onChange={handler} />
        </>
    )
}