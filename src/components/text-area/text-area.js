import { CustomTextarea } from "./text-area-styles"
export default function Textarea({handler}) {
    return(
        <>
            <CustomTextarea onChange={handler}/>
        </>
    )
}