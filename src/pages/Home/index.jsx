import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { InfoTable } from "../../components/InfoTable"
import { Information } from "../../components/Informations"
import { InputsContainer } from "../../components/InputsContainer"
import { api } from "../../services/api"
import './styles.css'

export const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        api.get('list/financas/0').then(response => {
            setList(response.data.rows)
        })
    }, [])

    function handleSaveItens(item) {
        const data = item.dados
        api.post('create/financa', data).then(response => {
        })

        api.get('list/financas/0').then(response => {
            setList(response.data.rows)
        })
    }

    function handleSearchFinancasFromDate(data) {
        api.get(`list/financas/dataInicial/${data.initialdate}/dataFinal/${data.finaldate}/page/0`)
        .then(response => {
            setList(response.data.rows)
        })
    }

    return (
        <div className="container">
         <Header />
         <Information list={list} onSearch={handleSearchFinancasFromDate}/>
         <InputsContainer addItems={handleSaveItens}/>
         <InfoTable list={list}/>
        </div>
        

    )
}