import './Home.css'
import { Component } from "react";
import { Link } from "react-router-dom";

import CardTotalizador from '../../cardTotalizador/CardTotalizador';
import GraficoPizza from '../../graficoPizza/GraficoPizza';

export class Home extends Component {
    render() {
        const optionsGrafico = {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }

        const dataGrafico = {
            labels: [
                'Internet',
                'Livros',
                'Academia'
            ],
            datasets: [{
                label: 'valor',
                data: [300.70, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        }

        return (
            <div className="home">
                <div className="areaTotalizadores">
                    <CardTotalizador label="Saldo" valor={1000000} />
                    <CardTotalizador label="Receitas" valor={1000000} />
                    <CardTotalizador label="Despesas" valor={1000000} />
                    <CardTotalizador label="Economias" valor={1000000} />
                </div>

                <div className="areaInformacoes">
                    <div className="card transacoes">
                        <h1>Últimas Transações</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Copia da chave de casa</td>
                                    <td>Renda Extra</td>
                                    <td className="dinheiro">999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Compras</td>
                                    <td>Renda Variavel</td>
                                    <td className="dinheiro">999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Presente para amigo</td>
                                    <td>Salario</td>
                                    <td className="dinheiro">-999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Copia da chave de casa</td>
                                    <td>Internet</td>
                                    <td className="dinheiro">-999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Copia da chave de casa</td>
                                    <td>Renda Extra</td>
                                    <td className="dinheiro">999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Copia da chave de casa</td>
                                    <td>Renda Extra</td>
                                    <td className="dinheiro">999.999,00</td>
                                </tr>
                                <tr>
                                    <td>05/07/2021</td>
                                    <td>Copia da chave de casa</td>
                                    <td>Renda Extra</td>
                                    <td className="dinheiro">-999.999,00</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link id="verMais" to="/transacoes">Ver mais</Link>
                    </div>

                    <div className="card receitasDespesas">
                        <h1>Rceitas / Despesas</h1>

                        <div>
                            <GraficoPizza className="graficos" data={dataGrafico} options={optionsGrafico} />
                            <GraficoPizza className="graficos" data={dataGrafico} options={optionsGrafico} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}