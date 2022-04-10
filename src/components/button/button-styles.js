import styled from 'styled-components';

export const WrappedButton = styled.button`
    background-color: ${props => props.background_color || 'white'};
    color: ${props => props.text_color || 'black'};
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 16px;
    height: ${props => props.element_height || '35px'};
    width: ${props => props.element_width || '250px'};
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    width: ${props => props.width || '600px'};
    justify-content: ${props => props.justify || 'space-around'};
    margin: ${props => props.margins || '10px 0px'};
`;