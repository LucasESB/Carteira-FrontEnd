import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Div, CardTotalizador, CardInformacao } from './style';
import { formatarNumberEmReal } from '../../utils/number';
import { formatarData } from '../../utils/date';
import GraficoPizza from '../../components/graficoPizza/index';
import { IoIosAddCircleOutline } from 'react-icons/io';

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
            despesas: {
                labels: [],
                data: []
            },
        }
    }

    async componentDidMount() {
        const receitasDespesas = await this.getReceitasDespesas();
        const totalizadores = await this.loadTotalizadores(receitasDespesas);
        const receitas = this.loadReceitas(receitasDespesas);
        const despesas = this.loadDespesas(receitasDespesas);

        this.setState({
            totalizadores,
            transacoes: receitasDespesas,
            receitas,
            despesas
        });
    }

    async getReceitasDespesas() {
        try {
            const { data: { documentos } } = await api.get("/receitasdespesas");
            return documentos;
        } catch (error) {
            return [];
        }
    }

    async loadTotalizadores(receitasDespesas) {
        try {
            const { data: { documentos } } = await api.get("/contas");

            const saldo = documentos.map(conta => conta.saldo)
                .reduce((acumulador, valor) => acumulador + valor);

            var receitas = 0,
                despesas = 0;

            receitasDespesas.forEach(item => {
                if (item.valor > 0) receitas += item.valor;
                else despesas -= item.valor;
            });

            return {
                saldo,
                receitas,
                despesas,
                economias: 0,
            }
        } catch (error) {
            return {
                saldo: 0,
                receitas: 0,
                despesas: 0,
                economias: 0,
            }
        }
    }

    loadReceitas(receitasDespesas) {
        const categorias = [...new Set(receitasDespesas.filter(item => item.valor > 0)
            .map(item => item.categorias.descricao))];

        const valores = this.getvTotaisPorCategoria(categorias, receitasDespesas);

        return {
            labels: [...categorias],
            data: [...valores]
        }
    }

    getvTotaisPorCategoria(categorias, receitasDespesas) {
        const valores = [];

        categorias.forEach(cat => {
            var valorTotal = 0;

            receitasDespesas.forEach(item => {
                if (item.categorias.descricao === cat) valorTotal += item.valor;
            });

            valores.push(valorTotal);
        });

        return valores;
    }

    loadDespesas(receitasDespesas) {
        const categorias = [...new Set(receitasDespesas.filter(item => item.valor < 0)
            .map(item => item.categorias.descricao))];

        var valores = this.getvTotaisPorCategoria(categorias, receitasDespesas);
        valores = valores.map(v => v * (-1));

        return {
            labels: [...categorias],
            data: [...valores]
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
                <div className="botAdicionar">
                    <Link to="/transacoes"><IoIosAddCircleOutline /></Link>
                </div>

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
                                        <span className={`dinheiro ${item.valor < 0 ? 'despesa' : ''}`}>
                                            {formatarNumberEmReal(item.valor)}
                                        </span>
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
                                    data={this.state.despesas}
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
