import styled from 'styled-components';
import { Card } from '../../styles/card/index';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .areaTotalizadores {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: clamp(260px, 67vw, 845px);
        margin-bottom: 60px;
    }

    .areaInformacao {
        display: grid;
        column-gap: 20px;
        row-gap: 15px;
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        div {
            #areaTransacoes {
                width: 100%;
                height: 200px;
                padding-right: 10px;

                display: grid;
                grid-template-columns: 1fr;
                grid-auto-rows: clamp(20px, 2.5vw, 30px);
                
                overflow-x: hidden;

                &::-webkit-scrollbar {
                    width: 2px;
                }
                
                &::-webkit-scrollbar-thumb {
                    background-color: var(--bg-color-4);
                }
                
                div {
                    display: grid;
                    column-gap: clamp(5px, 1vw, 10px);
                    grid-template-columns: minmax(42.54px, 63.8px) minmax(95px,1fr) minmax(53px, 80px) minmax(41.83px, 62.74px);
                    align-items: center;

                    border-bottom: 1px solid var(--bg-color-4);

                    span {
                        font-size: var(--text-size-1);
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .dinheiro {
                        text-align: right;
                    }
                }
            }
            
            #areaGraficos {
                flex: 1;

                display: grid;
                grid-template-columns: auto auto;
                gap: 20px;
                justify-content: center;
                align-items: center;
                
                width: 100%;

                .graficos {
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }

    

    @media(max-width: 1130px) {
        .areaInformacao {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 560px) {
        .areaTotalizadores {
            width: clamp(260px, 80vw, 845px);
            margin-bottom: 40px;
        }

        .areaInformacao {
            div {
                #areaGraficos {
                    grid-template-columns: auto;
                }
            }
        }
    }
`;

export const CardInformacao = styled(Card)`
    width: clamp(260px, 80vw, 520px);

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 30px 25px 15px 25px;

    h1 {
        align-self: flex-start;
        
        font-size: var(--text-size-2);
        color: var(--text-color-1);

        margin-bottom: 30px;
    }

    a {
        color: var(--text-color-1);
        font-size: clamp(0.5rem, 1vw, 0.625rem);
        font-weight: 700;
        margin-top: 10px;
    }

    @media(max-width: 560px) {
        h1 {
            margin-bottom: 20px;
        }

        padding: 20px 15px 10px 15px;
    }
`;

export const CardTotalizador = styled(Card)`
    span {
        font-size: var(--text-size-1);
        margin-bottom: 5px;
    }
    
    strong {
        font-size: clamp(0.625rem, 1.4vw, 1.125rem);
    }

    @media(max-width: 800px) {
        border-radius: 8px;
    }

    @media(max-width: 460px) {
        &:last-child {
            display: none;
        }
    }

    width: clamp(90px, 15vw, 200px);
    height: clamp(40px, 6vw, 82px);
    padding-right: clamp(5px, 1.8vw, 20px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: right;
    color: var(--text-color-1)
`;