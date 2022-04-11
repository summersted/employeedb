import styled from 'styled-components';

export const ModalWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${({active}) => active ? 'flex' : 'none'};
    justify-content: center;
`;

export const ModalContent = styled.div`
    width: 200px;
    height: 125px;
    margin-top: 90px;
    background-color: #ffcccc;
    border: 1px solid grey;
    color: grey;
    font-size: 16px;
`;
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
    padding: 3px;
    justify-content: space-between;
`;
export const ModalText = styled.div`
    padding: 8px 30px;
    text-align: center;
    line-height: 18px;
`;
export const ModalTitle = styled.span`
`;
export const ModalCloseButton = styled.div`
    border: 1px solid #008cff;
    width: 16px;
    height: 16px;
    border-radius: 10px;
`;
export const ModalButton = styled.button`
    width: 75px;
    height: 23px;
    color: grey;
    border: 1px solid grey;
`;