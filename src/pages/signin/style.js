import styled from 'styled-components';

export const Div = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 270px;

        label {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            span {
                margin-bottom: 5px;
            }
        }

        input {
            width: 100%;
            padding: 5px 0px;
            margin-top: 5px;
        }
    }
`;