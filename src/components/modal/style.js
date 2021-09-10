import styled from 'styled-components';

export const Div = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--zindex-10);

    background: rgba(1, 4, 9, 0.8);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    > div {
        position: relative;

        width: ${props => (props.width ? props.width : 67 + "vw")};
        max-width: ${props => (props.maxWidth ? props.maxWidth : 350 + "px")};
        min-width: ${props => (props.minWidth ? props.minWidth : 260 + "px")};
        height: ${props => (props.height ? props.height : 400 + "px")};
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--bg-color-2);
        border: 1px solid var(--bg-color-4);
        border-radius: 15px;

        overflow-x: hidden;

        padding: 15px;

        #fecharModal {
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
`;