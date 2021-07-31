import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    padding-top: 11px;

    select:focus {
        border-color: var(--bg-color-4);
    }
    
    select:focus + label {
        color: var(--text-color-3);
    }

    select::placeholder {
        color: transparent;
    }

    select:focus:required:invalid {
        border-color: var(--text-color-4);
    }

    select:required:invalid + label {
        color: var(--text-color-4);
    }

    select:focus + label, select:not([value=""]):valid + label {
        top: 0;
        font-size: var(--text-size-1);
    }

    label {
        position: absolute;
        top: calc(50% - 8px);
        left: clamp(11px, 1vw,15px);
        
        background-color: var(--bg-color-1);
        
        padding: 5px;

        pointer-events: none;
        transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -moz-transition: all .1s linear;

        margin: 0 2px;

        display: flex;
        flex-direction: row;
    }
`;