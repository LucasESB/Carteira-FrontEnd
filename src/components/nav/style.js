import styled from 'styled-components';

export const NavElement = styled.nav`
    flex: 1;
    background-color: var(--bg-color-3);

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    padding: 30px 0;

    display: ${props => props.show ? 'flex' : 'none'};

    ul {
        width: 100%;
    }
`;