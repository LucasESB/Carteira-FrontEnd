import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    padding-top: 13px;
    margin-bottom: 15px;

    input:focus {
        border: 2px solid var(--bg-color-3);
    }

    input::placeholder {
        color: transparent;
    }

    input:focus:required:invalid {
        border: 2px solid var(--text-color-4);
    }

    input:required:invalid + label {
        color: var(--text-color-4);
    }
    
    input:required:invalid + label::before {
        content: '*';
    }

    input:focus + label, input:not(:placeholder-shown) + label {
        top: 0;
        font-size: var(--text-size-1);
    }

    label {
        position: absolute;
        top: calc(50% - 8px);
        left: 15px;
        
        background-color: var(--bg-color-1);
        
        padding: 5px;

        pointer-events: none;
        transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -moz-transition: all .1s linear;
    }
`;