import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const PaginationItem = styled.li`
    list-style-type: none;
    padding: 3px;
`;

export const PaginationPageLink = styled.a`
    color: ${({active}) => active ? 'red' : 'blue'};
`;