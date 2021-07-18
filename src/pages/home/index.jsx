import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Div, CardTotalizador, CardInformacao } from './style';
import { formatarNumberEmReal } from '../../utils/number';
import { formatarData } from '../../utils/date';
import GraficoPizza from '../../components/graficoPizza/index';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            totalizadores: {
                saldo: 0,
                receitas: 0,
                despesas: 0,
                economias: 0,
            },
            transacoes: [],
            receitas: {
                labels: [],
                data: []
            },
            despesas: {}
        }
    }

    async componentDidMount() {
        const receitasDespesas = await this.getReceitasDespesas();

        const totalizadores = this.loadTotalizadores();
        const receitas = this.loadReceitas();

        this.setState({
            totalizadores,
            transacoes: receitasDespesas,
            receitas
        });
    }

    async getReceitasDespesas() {
        try {
            const response = await api.get("/receitasdespesas");
            return response.data.documentos;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    loadTotalizadores() {
        return {
            saldo: 1000000,
            receitas: 1000000,
            despesas: 1000000,
            economias: 1000000,
        }
    }

    loadReceitas() {
        return {
            labels: ['Internet', 'Livros', 'Academia'],
            data: [300.70, 50, 100]
        }
    }

    optionsGrafico = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    render() {
        const { totalizadores, transacoes } = this.state;
        return (
            <Div>
                <div className="areaTotalizadores">
                    <CardTotalizador>
                        <span>Saldo</span>
                        <strong>{`R$ ${formatarNumberEmReal(totalizadores.saldo)}`}</strong>
                    </CardTotalizador>

                    <CardTotalizador>
                        <span>Receitas</span>
                        <strong>{`R$ ${formatarNumberEmReal(totalizadores.receitas)}`}</strong>
                    </CardTotalizador>

                    <CardTotalizador>
                        <span>Despesas</span>
                        <strong>{`R$ ${formatarNumberEmReal(totalizadores.despesas)}`}</strong>
                    </CardTotalizador>

                    <CardTotalizador>
                        <span>Economias</span>
                        <strong>{`R$ ${formatarNumberEmReal(totalizadores.economias)}`}</strong>
                    </CardTotalizador>
                </div>

                <div className="areaInformacao">
                    <CardInformacao>
                        <h1>Ultimas Transações</h1>

                        <div id="areaTransacoes">
                            {
                                transacoes.map((item, index) =>
                                    <div key={index}>
                                        <span>{formatarData(item.dataMovimento)}</span>
                                        <span>{item.descricao}</span>
                                        <span>{item.categorias.descricao}</span>
                                        <span className="dinheiro">{formatarNumberEmReal(item.valor)}</span>
                                    </div>
                                )
                            }
                        </div>

                        <Link to="/transacoes">Ver Mais</Link>
                    </CardInformacao>

                    <CardInformacao >
                        <h1>Receitas / Despesas</h1>

                        <div id="areaGraficos">
                            <div className="graficos">
                                <GraficoPizza
                                    data={this.state.receitas}
                                    options={this.optionsGrafico}
                                />
                            </div>

                            <div className="graficos">
                                <GraficoPizza
                                    data={this.state.receitas}
                                    options={this.optionsGrafico}
                                />
                            </div>
                        </div>
                    </CardInformacao>
                </div>
            </Div>
        )
    }
}
