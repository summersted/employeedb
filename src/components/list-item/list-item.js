import { Link } from "react-router-dom";
import { TdElement } from "./list-item-styles";
export default function ListItem({listItem, id}) {
    
    return(
        <tr key={id}>
            <TdElement>{id+1}</TdElement>
            <TdElement>{listItem?.name}</TdElement>
            <TdElement>{listItem?.department}</TdElement>
            <TdElement><Link to={`edit/${id}`}>edit</Link></TdElement>
            <TdElement><a onClick={()=> console.log('delete ',id) }>delete</a></TdElement>
        </tr>
    )
}