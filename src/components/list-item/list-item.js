import { Link, useNavigate } from "react-router-dom";
import { TdElement } from "./list-item-styles";
import { removeEmployee } from "../../services";
export default function ListItem({ listItem, index, reloader }) {
    const navigate = useNavigate();
    const onDelete = () => {
        removeEmployee(listItem?.id);
        reloader();
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
                    onClick={onDelete}>Delete</a>
            </TdElement>
        </tr>
    )
}