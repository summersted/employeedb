import ListItem from "../list-item"
import { TableElement,ThElement } from "./list-styles"
export default function List({ list }) {
    return (
        <TableElement>
            <thead>
                <tr>
                    <ThElement width='20px'>#</ThElement>
                    <ThElement>Employee</ThElement>
                    <ThElement>Department</ThElement>
                    <ThElement width='60px'>Edit</ThElement>
                    <ThElement width='100px'>Delete</ThElement>
                </tr>
            </thead>
            <tbody>
                {list ? (
                    list.map((item, i) => {
                        return (
                            <ListItem listItem={item} id={i} key={i} />
                        )
                    })
                ) : (
                    // here should be loader component
                    <p>Loading...</p>
                )}
            </tbody>
        </TableElement>
    )
}