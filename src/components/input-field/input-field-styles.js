import styled from 'styled-components';

export const CustomInput = styled.input`
    width: ${({width}) => width || '170px'};
    padding: 5px 0 5px 16px;
    font-size: 16px;
    color: #555555;
    border: 1px solid #525252;
`;