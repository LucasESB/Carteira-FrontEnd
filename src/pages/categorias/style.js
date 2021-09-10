import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    #areaCategorias {
        display: flex;
        flex-direction: column;

        height: 80%;
        width: clamp(260px, 20vw, 450px);

        background-color: var(--bg-color-2);
        border: 1px solid var(--bg-color-4);
        border-radius: 15px;

        padding: 15px 5px 15px 15px;

        #acoes {
            display: flex;
            justify-content: flex-end;

            margin-right: 10px;
        }

        #listCategorias {
            width: 100%;

            padding: 0 10px 0 0;

            overflow-x: hidden;
            overflow-y: scroll;

            margin-top: 10px;

            &::-webkit-scrollbar {
                width: 2px;
            }
            
            &::-webkit-scrollbar-thumb {
                background-color: var(--bg-color-4);
            }

            > ul {
                li {
                    list-style: none;

                    height: clamp(30px, 8vw, 40px);

                    border-bottom: 1px solid var(--bg-color-4);

                    display: flex;
                    align-items: center;

                    font-size: var(--text-size-3);

                    cursor: pointer;
                }
            }
        }
    }
    
`;