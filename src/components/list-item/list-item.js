import { Link } from "react-router-dom";

export default function ListItem({listItem, id}) {
    
    return(
        <tr key={id}>
            <td>{id+1}</td>
            <td>{listItem?.name}</td>
            <td>{listItem?.department}</td>
            <td><Link to={`edit/${id}`}>edit</Link></td>
            <td><a onClick={()=> console.log('delete ',id) }>delete</a></td>
        </tr>
    )
}