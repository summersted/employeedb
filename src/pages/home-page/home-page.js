import { useNavigate } from "react-router-dom";

import DropdownInput from "../../components/dropdown-input";
import SearchInput from "../../components/search-input";
import List from "../../components/list";

import { SearchPanel } from "./home-page-styles";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { filterEmployees, getEmployees } from "../../services";

export default function Homepage() {
    const [employeesData, setEmployeesData] = useState([]);
    const [filtredList, setFiltredList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [needReload, setNeedReload] = useState([false]);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchDepartment, setSearchDepartment] = useState('none');
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees().then(({ employees }) => {
            setEmployeesData(employees);
            setFiltredList(employees);
        })
        console.log(filtredList);
    }, [needReload]);

    useEffect(() => {
        setNeedReload(false);
    }, [needReload]);

    useEffect(() => {
        filterEmployees(searchQuery).then(({ employees }) =>{
            if (searchDepartment === 'none') {
                setFiltredList(employees);
            } else {
                setFiltredList(employees.filter((row) => (row.department === searchDepartment)))
            }
        })
            
    }, [searchQuery, searchDepartment]);
    
    const buttonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '100px'
    };

    const setActivePage = (namberOfPage) => setCurrentPage(namberOfPage);

    const pages = Math.ceil(filtredList?.length / 5);
    const indexOfLastEmployee = currentPage * 5;
    const indexOfFirstEmployee = indexOfLastEmployee - 5;
    const employeesPage = filtredList?.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const doReload = () => setNeedReload(true);
    const searchQuerryHandler = (value) => setSearchQuery(value);
    const searchDepartmentHandler = (e) => setSearchDepartment(e.target.value);

    return (
        <>
            <SearchPanel>
                <SearchInput handler={searchQuerryHandler} />
                <DropdownInput
                    width='170px'
                    handler={searchDepartmentHandler} />
                <Button
                    buttonOptions={buttonOptions}
                    handler={() => navigate('add')} />
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