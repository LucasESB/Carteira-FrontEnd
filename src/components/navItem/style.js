import styled from 'styled-components';

export const Li = styled.li`
    list-style: none;
    
    transition: 300ms;
    
    &:hover {
        background-color: var(--bg-color-4);
    }
    
    a {
        display: flex;
        align-items: center;
        
        height: 35px;
        width: 100%;
        margin-left: 25px;

        font-size: var(--text-size-2);
        font-weight: 400;
        
        svg {
            font-size: 20px;
            margin-right: 10px;
        }
    }
`;