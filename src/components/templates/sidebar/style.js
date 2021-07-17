import styled from 'styled-components';

export const Aside = styled.aside`
    max-width: 235px;
    min-width: ${props => props.sidebar ? '170px' : '0px'};
    width: ${props => props.sidebar ? '17%' : '0px'};
    height: 100%;
    
    background-color: var(--bg-color-2);

    transition: 300ms;

    display: flex;
    flex-direction: column;

    div {
        height: 216px;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        display: ${props => props.sidebar ? 'flex' : 'none'};

        div {
            height: clamp(80px , 8vw, 95px);
            width: clamp(80px , 8vw, 95px);

            background-color: var(--bg-color-3);
            
            border-radius: 50%;
        }

        strong {
            margin-top: 20px;

            font-size: var(--text-size-4);
            font-weight: 700;
            color: var(--text-color-1);
        }
    }
`;

export const IconMenu = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;

    a {
        outline: none;
        color: var(--text-color-1);
        font-size: 20px;
    }
`;