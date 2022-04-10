import styled from 'styled-components';
import { SearchFormElement } from '../search-input/search-input-styles';

export const DropdownFormElement = styled(SearchFormElement)`
    border-radius: 5px;
    width: ${({width}) => width || '170px'};
`;

export const DropdawnSelectElement = styled.select`
    border: none;
    background: transparent;
    padding: 2px 8px;
    font-size: 16px;
    color: inherit;
    border: 1px solid transparent;
    width: ${({width}) => width || '170px'};
`;
