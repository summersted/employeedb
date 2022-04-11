import ListItem from "../list-item";
import { TableElement, ThElement } from "./list-styles";

export default function List({
    list,
    currentPage,
    modalOpenHandler,
    delTargetIdHanler
}) {
    return (
        <TableElement>
            <thead>
                <tr>
                    <ThElement width='20px'>#</ThElement>
                    <ThElement>Employee</ThElement>
                    <ThElement width='150px'>Department</ThElement>
                    <ThElement width='60px'>Edit</ThElement>
                    <ThElement width='100px'>Delete</ThElement>
                </tr>
            </thead>
            <tbody>
                {list ? (
                    list.map((item, i) => {
                        const index = (currentPage * 5) - 4 + i;
                        return (
                            <ListItem
                                listItem={item}
                                index={index}
                                modalOpenHandler={modalOpenHandler}
                                delTargetIdHanler={delTargetIdHanler}
                                key={index} />
                        )
                    })
                ) : (
                    // here should be loader component
                    <tr><td><p>loading...</p></td></tr>
                )}
            </tbody>
        </TableElement>
    )
}