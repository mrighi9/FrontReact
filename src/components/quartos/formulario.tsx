import Quarto from "@/core/Quarto";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    quarto: Quarto
    quartoMudou?: (quarto: Quarto) => void
    cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
    const id = props.quarto?.id
    const [nome, setNome] = useState(props.quarto?.nome)
    const [status, setStatus] = useState(props.quarto?.status)

    return (<div>
        {id ? (<Entrada texto="id" valor={id} somenteLeitura ></Entrada>) : false}
        <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
        <Entrada texto="Status" valor={status} onChange={setStatus}></Entrada>
        <div className="flex justify-end mt-5" >
            <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700" 
                onClick={() => props.quartoMudou?.(new Quarto(
                    id, nome, status))}>
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
            </Botao>
        </div>
    </div>
    )
}