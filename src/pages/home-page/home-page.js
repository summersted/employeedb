import { useNavigate } from "react-router-dom";

import DropdownInput from "../../components/dropdown-input";
import SearchInput from "../../components/search-input";
import List from "../../components/list";

import { SearchPanel } from "./home-page-styles";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { getEmployees } from "../../services";

export default function Homepage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesData, setEmployeesData] = useState([]);
    const [needReload, setNeedReload] = useState([false])
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees().then(({ employees }) => {
            setEmployeesData(employees);
        });
    }, [needReload]);

    useEffect(() => {
        setNeedReload(false);
    }, [needReload])

    const buttonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '100px'
    }
    const setActivePage = (namberOfPage) => setCurrentPage(namberOfPage);

    const pages = Math.ceil(employeesData?.length / 5);

    const indexOfLastEmployee = currentPage * 5;
    const indexOfFirstEmployee = indexOfLastEmployee - 5;
    const employeesPage = employeesData?.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const doReload = () => setNeedReload(true);

    return (
        <>
            <SearchPanel>
                <SearchInput />
                <DropdownInput width='170px' />
                <Button buttonOptions={buttonOptions} handler={() => navigate('add')} />
            </SearchPanel>
            <List
                list={employeesPage}
                currentPage={currentPage}
                reloader={doReload} />
            <Pagination
                pages={pages}
                setActivePage={setActivePage}
                currentPage={currentPage}
            />
        </>
    )
}