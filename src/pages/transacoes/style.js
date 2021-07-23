import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
        width: 400px;
        
        display: flex;
        flex-direction: column;

        label {
            display: flex;
            flex-direction: column;

            margin-bottom: 12px;

            span {
                font-size: var(--text-size-2);
                margin-bottom: 5px;
            }
        }

        button {
            height: 30px;
            
        }

    }
`;