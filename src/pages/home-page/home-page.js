import employeesList from "./nameslist";
import DropdownInput from "../../components/dropdown-input";
import SearchInput from "../../components/search-input";
import List from "../../components/list";

import { SearchPanel } from "./home-page-styles";
import Button from "../../components/button";

export default function Homepage() {
    const buttonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '100px'
    }

    return (
        <>
            <SearchPanel>
                <SearchInput />
                <DropdownInput width='170px' />
                <Button buttonOptions={buttonOptions} />
            </SearchPanel>
            <List list={employeesList} />
        </>
    )
}