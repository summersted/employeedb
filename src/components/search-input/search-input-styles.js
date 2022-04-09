import styled from 'styled-components';

export const SearchFormElement = styled.form`
    width: 270px;
    color: #555;
    display: flex;
    padding: 2px;
    border: 1px solid currentColor; 
`;

export const SearchInputElement = styled.input`
    border: none;
    background: transparent;
    padding: 2px 8px;
    font-size: 16px;
    color: inherit;
    border: 1px solid transparent;
    border-radius: inherit;
`;

export const SearchButtonElement = styled.button`
    width: 40px;
    padding: 0;
    margin: 0;
    margin-left: 10px;
    border: 1px solid transparent;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    cursor: pointer;
`
