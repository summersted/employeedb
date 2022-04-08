import List from "../../components/list/list";

export default function Homepage() {
    const list = [
        {
            name: 'Anton',
            department: 'Development'
        },
        {
            name: 'Artem',
            department: 'Management'
        },
        {
            name: 'Vova',
            department: 'Development'
        },
        {
            name: 'Vlad',
            department: 'QA'
        }
    ]
    return (
        <>
            <h1>home page</h1>
            <List list={list} />
        </>
    )
}