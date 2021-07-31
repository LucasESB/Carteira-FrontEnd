import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        width: 400px;
        height: 400px;
        
        display: flex;
        flex-direction: column;

        button {
            margin-top: 20px;
            height: 30px;
        }

    }
`;