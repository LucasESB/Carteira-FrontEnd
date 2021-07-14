import styled from 'styled-components';

export const Aside = styled.aside`
    width: ${props => props.sidebar ? '17%' : '0'};
    max-width: 235px;
    min-width: 200px;
    height: 100%;
    
    background-color: var(--bg-color-2);

    transition: 300ms;

    display: flex;
    flex-direction: column;

    div {
        height: 216px;
        width: 100%;

        div {
            
        }
    }

    nav {
        flex: 1;
        background-color: var(--bg-color-3);

        border-top-left-radius: 30px;
        border-top-right-radius: 30px;

        padding: 30px 0;

        ul {
            margin-left: 20px;
            list-style: none;
            display: ${props => props.sidebar ? 'block' : 'none'};
        }
    }
`;

export const IconMenu = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;

    a {
        color: #FFF;
        font-size: 20px;
    }
`;