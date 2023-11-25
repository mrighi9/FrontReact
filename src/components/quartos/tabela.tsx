import Quarto from "@/core/Quarto"
import { IconeEdicao, IconeLixo } from "../icones/tabela"

interface TabelaProps {
    quartos: Quarto[]
    quartoSelecionado?: (quarto: Quarto) => void
    quartoExcluido?: (quarto: Quarto) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.quartoSelecionado || props.quartoExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">status</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }
    function renderDados() {
        return props.quartos?.map((quarto, i) => {
            return (
                <tr key={quarto.id}
                    className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                    <td className="text-left p-3">{quarto.id}</td>
                    <td className="text-left p-3">{quarto.nome}</td>
                    <td className="text-left p-3">{quarto.status}</td>
                    {exibirAcoes ? renderizarAcoes(quarto) : false }
                </tr>)
        })
    }

    function renderizarAcoes(quarto: Quarto) {
        return (
        <td className="flex justify-center">
        {props.quartoSelecionado
        ? ( <button onClick={() => props.quartoSelecionado?.(quarto)}
        className={`flex justify-center items text-green-600
        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeEdicao}</button>)
        : false }
        {props.quartoExcluido
        ? (<button onClick={() => props.quartoExcluido?.(quarto)}
        className={`flex justify-center items text-red-600
        rounded-full p-2 m-1 hover:bg-gray-100`}>{IconeLixo}</button>)
        : false}
        </td>)}

    return (
        <table className="w-full rounded-xl overflow-hidden">
        <thead className={`text-gray-100
        bg-gradient-to-r from-indigo-500 to-indigo-800`}>
        {renderHeader()}
        </thead>
        <tbody>
        {renderDados()}
        </tbody>
        </table>
       )
}

