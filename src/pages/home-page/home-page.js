import List from "../../components/list";
import employeesList from "./nameslist";

export default function Homepage() {
    return (
        <>
            <h1>home page</h1>
            <List list={employeesList} />
        </>
    )
}