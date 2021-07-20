import styled from 'styled-components';

export const MainElement = styled.main`
    flex: 1;

    padding: clamp(30px, 5vw, 60px);

    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 5px;
    }
                
    &::-webkit-scrollbar-thumb {
        background-color: var(--bg-color-4);
    }
    
    @media(max-width: 800px) {
        padding-top: 40px;
    }
`;