import { useNavigate } from "react-router-dom";

import DropdownInput from "../../components/dropdown-input";
import SearchInput from "../../components/search-input";
import List from "../../components/list";

import { LogoutDiv, SearchPanel } from "./home-page-styles";
import Button from "../../components/button";
import Pagination from "../../components/pagination";
import { useContext, useEffect, useState } from "react";
import { filterEmployees, getEmployees } from "../../services";
import Modal from "../../components/modal/modal";
import { AuthContext } from "../../auth/auth.context";

export default function Homepage() {
    const [employeesData, setEmployeesData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [needReload, setNeedReload] = useState([false]);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchDepartment, setSearchDepartment] = useState('none');

    const [isModalActive, setIsModalActive] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState(0);

    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    useEffect(() => {
        getEmployees().then(({ employees }) => {
            setEmployeesData(employees);
            setSearchQuery('');
            setSearchDepartment('none');
        })
    }, [needReload]);

    useEffect(() => {
        setNeedReload(false);
    }, [needReload]);

    useEffect(() => {
        filterEmployees(searchQuery).then(({ employees }) => {
            if (searchDepartment === 'none') {
                setEmployeesData(employees);
            } else {
                setEmployeesData(employees.filter((row) => (row.department === searchDepartment)))
            }
        })

    }, [searchQuery, searchDepartment]);

    const buttonOptions = {
        text: 'Add',
        background_color: '#008cff',
        element_width: '100px'
    };

    const setActivePage = (namberOfPage) => setCurrentPage(namberOfPage);

    const pages = Math.ceil(employeesData?.length / 5);
    const indexOfLastEmployee = currentPage * 5;
    const indexOfFirstEmployee = indexOfLastEmployee - 5;
    const employeesPage = employeesData?.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const doReload = () => setNeedReload(true);
    const searchQuerryHandler = (value) => setSearchQuery(value);
    const searchDepartmentHandler = (e) => setSearchDepartment(e.target.value);

    const deleteTargetIdHanler = (v) => setDeleteTargetId(v);

    const modalCloseHandler = () => setIsModalActive(false);
    const modalOpenHandler = () => setIsModalActive(true);
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
                modalOpenHandler={modalOpenHandler} 
                delTargetIdHanler={deleteTargetIdHanler}/>
            <Pagination
                pages={pages}
                setActivePage={setActivePage}
                currentPage={currentPage}
            />
            <Modal 
            isActive={isModalActive} 
            closeHandler={modalCloseHandler} 
            reloader={doReload}
            target={deleteTargetId}/>
            <LogoutDiv onClick={logout}></LogoutDiv>
        </>
    )
    }