import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    padding-top: 11px;

    input:focus {
        border-color: var(--bg-color-4);
    }
    
    input:focus + label {
        color: var(--text-color-3);
    }

    input::placeholder {
        color: transparent;
    }

    input:focus:required:invalid {
        border-color: var(--text-color-4);
    }

    input:required:invalid + label {
        color: var(--text-color-4);
    }
    
    /* input:required:invalid + label::before {
        content: '*';
    } */

    input:focus + label, input:not(:placeholder-shown) + label {
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

export const InputCheckBoxERadio = styled.div`
    display: flex;
    align-items: center;

    input {
        appearance: none;
        margin: 8px;
        position: relative !important;

        &:before {
            content: '';
            display: block;
            box-sizing: content-box;
            width: 16px;
            height: 16px;
            border: 2px solid #ccc;
            transition: 0.2s border-color ease;
        }

        &:checked:before {
            border-color: #12CBC4;
            transition: 0.5s border-color ease;
        }
        
        &:disabled:before {
            border-color: #ccc;
            background-color: #ccc;
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            box-sizing: content-box;
            top: 50%;
            left: 50%;
            transform-origin: 50% 50%;
            background-color: #12CBC4;
            width: 16px;
            height: 16px;
            border-radius: 100vh;
            transform: translate(-50%, -50%) scale(0);
        }

        &[type="radio"] {
            &:before {
                border-radius: 100vh;
            }

            &:after {
                width: 16px;
                height: 16px;
                border-radius: 100vh;
                transform: translate(-50%, -50%) scale(0);
            }

            &:checked:after {
                animation: toggleOnRadio 0.2s ease forwards;
            }
        }

        &[type="checkbox"] {
            &:before {
                border-radius: 4px;
            }

            &:after {
                width: 9.6px;
                height: 16px;
                border-radius: 0;
                transform: translate(-50%, -85%) scale(0) rotate(45deg);
                background-color: transparent;
                box-shadow: 4px 4px 0px 0px #12CBC4;
            }

            &:checked:after {
                animation: toggleOnCheckbox 0.2s ease forwards;
            }
        }

        &[type="checkbox"].filled  {
            &:before {
                border-radius: 9.6px;
                transition: 0.2s border-color ease, 0.2s background-color ease;
            }
            
            &:checked:not(:disabled):before {
                background-color: #12CBC4;
            }

            &:not(:disabled):after {
                box-shadow: 4px 4px 0px 0px white;
            }
        }

        @keyframes toggleOnCheckbox {
            0% {
                opacity: 0;
                transform: translate(-50%, -85%) scale(0) rotate(45deg);
            }

            70% {
                opacity: 1;
                transform: translate(-50%, -85%) scale(0.9) rotate(45deg);
            }
            
            100% {
                transform: translate(-50%, -85%) scale(0.8) rotate(45deg);
            }
        }

        @keyframes toggleOnRadio {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }

            70% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0.9);
            }
            
            100% {
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    }
`;