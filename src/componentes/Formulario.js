import React, { useEffect } from 'react';
import axios from 'axios';

function Formulario(){

        useEffect(() => {
                const constultarAPI = async () => {
                    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=15&tsym=USD';
                    const resultado = await axios.get(url);
                    console.log(resultado);
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

            </select>
        </div>
    </form>
    )
}

export default Formulario;