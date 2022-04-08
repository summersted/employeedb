import ListItem from "../list-item/list-item"

export default function List({ list }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {list ? (
                list.map((item, i) => {
                    return (
                        <ListItem listItem={item} id={i} />
                    )
                })
            ) : (
                // here should be loader component
                <p>Loading...</p>
            )}
        </table>
    )
}