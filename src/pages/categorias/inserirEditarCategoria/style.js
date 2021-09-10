import styled from 'styled-components';

export const Form = styled.form`
    width: clamp(240px, 20vw, 480px);
    height: auto;
        
    display: flex;
    flex-direction: column;

    button {
        margin-top: 20px;
        height: 30px;
    }

    fieldset {
        display: flex;
        border-style: none;
    }
`;