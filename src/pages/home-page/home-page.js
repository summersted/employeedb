import { Link } from "react-router-dom";

import employeesList from "./nameslist";
import DropdownInput from "../../components/dropdown-input";
import SearchInput from "../../components/search-input";
import List from "../../components/list";

import { SearchPanel } from "./home-page-styles";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import { useState } from "react";

export default function Homepage() {
    const [currentPage, setCurrentPage] = useState(1);

    const buttonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '100px'
    }
    const setActivePage = (namberOfPage) => setCurrentPage(namberOfPage);

    const pages = Math.ceil(employeesList.length / 5);

    const indexOfLastEmployee = currentPage * 5;
    const indexOfFirstEmployee = indexOfLastEmployee - 5;
    const employeesPage = employeesList.slice(indexOfFirstEmployee, indexOfLastEmployee);

    return (
        <>
            <SearchPanel>
                <SearchInput />
                <DropdownInput width='170px' />
                <Link to={`add`}>
                    <Button buttonOptions={buttonOptions} />
                </Link>
            </SearchPanel>
            <List list={employeesPage} currentPage={currentPage} />
            <Pagination
                pages={pages}
                setActivePage={setActivePage}
                currentPage={currentPage}
            />
        </>
    )
}