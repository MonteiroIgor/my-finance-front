import { useState } from 'react'
import './styles.css'
import { api } from '../../services/api'

export const Information = ({list, onSearch}) => {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [statement, setStatement] = useState(0)

    const [initialdate, setInitialDate] = useState(0)
    const [finaldate, setFinalDate] = useState(0)

    function SearchFinancas() {
        onSearch({initialdate, finaldate})
    }

    list.map(financa => {
        api.get(`search/financa/categoria_id/${financa.categoria_id}`).then(
            response => {
                if(response.data.Categoria.descricao === 'Income') {
                    setIncome(response.data.saldo)
                }
                if(response.data.Categoria.descricao === 'Expense') {
                    setExpense(response.data.saldo)
                }
                setStatement(income - expense)
            }
        )
    })


    return (
        <section>
            <div className="input-date">
                <div className="container-input">
                    <label htmlFor="initial-date">Initial Date</label>
                    <input 
                        type="date" 
                        name="initial-date" 
                        value={initialdate}
                        onChange={e => setInitialDate(e.target.value)}
                    />
                </div>

                <div className="container-input">
                    <label htmlFor="final-date">Final Date</label>
                    <input 
                        type="date" 
                        name="final-date" 
                        value={finaldate}
                        onChange={e => setFinalDate(e.target.value)}
                    />
                </div>

                <div className="container-input">
                    <button onClick={SearchFinancas}>Search</button>
                </div>
            </div>

            <div className="info-values">
                <p>Income</p>
                <span className="span-green">R$ {income}</span>
            </div>

            <div className="info-values">
                <p>Expenses</p>
                <span className="span-red">R$ {expense}</span>
            </div>

            <div className="info-values">
                <p>Statement</p>
                <span className="span-green">R$ {statement}</span>
            </div>
        </section>
    )
}