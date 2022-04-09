import ListItem from "../list-item"

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
            <tbody>
                {list ? (
                    list.map((item, i) => {
                        return (
                            <ListItem listItem={item} key={i} id={i}/>
                        )
                    })
                ) : (
                    // here should be loader component
                    <p>Loading...</p>
                )}
            </tbody>
        </table>
    )
}