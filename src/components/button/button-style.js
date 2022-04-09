import styled from 'styled-components';

export const WrappedButton = styled.button`
    background-color: ${props => props.background_color || 'white'};
    color: ${props => props.text_color || 'black'};
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 16px;
    width: ${props => props.element_width || '250px'};
`;