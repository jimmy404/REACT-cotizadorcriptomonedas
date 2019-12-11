import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';

function Formulario(){
const [criptomonedas, guardarCriptomonedas ] = useState ([]);

        useEffect(() => {
                const constultarAPI = async () => {
                    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=15&tsym=USD';
                    const resultado = await axios.get(url);
                    console.log(resultado);
                    //colocar respuesta en el state
                    guardarCriptomonedas(resultado.data.Data);
                }
                constultarAPI();
        }, []);

    return(<form>
        <div className="row">
            <label>Elige tu moneda</label>
            <select
            className="u-full-width"
            >
                <option value="">-Elige tu moneda -</option>
                <option value="USD">Dolar Estadounidense</option>
                <option value="MXN">Peso Mexicano</option>
                <option value="GBP">Libras</option>
                <option value="EUR">Euro</option>
            </select>
        </div>
        <div className="row">
            <label>Elige tu Criptomoneda</label>
            <select
            className="u-full-width"
            >
            {criptomonedas.map(criptomoneda => (
                <Criptomoneda
                key={criptomoneda.CoinInfo.Id}
                    criptomoneda={criptomoneda}
                />
            ))}
            </select>
        </div>
    </form>
    )
}

export default Formulario;