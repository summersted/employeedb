import { Link, useNavigate } from "react-router-dom";
import { TdElement } from "./list-item-styles";

export default function ListItem({ listItem, index, modalOpenHandler, delTargetIdHanler}) {
    const onDelete = (id) => {
        delTargetIdHanler(id)
        modalOpenHandler();
    }

    return (
        <tr key={index}>
            <TdElement>{index}</TdElement>
            <TdElement>{listItem?.name}</TdElement>
            <TdElement>{listItem?.department}</TdElement>
            <TdElement><Link to={`edit/${listItem?.id}`}>Edit</Link></TdElement>
            <TdElement>
                <a
                    href="#"
                    onClick={() => onDelete(listItem?.id)}>Delete</a>
            </TdElement>
        </tr>
    )
}