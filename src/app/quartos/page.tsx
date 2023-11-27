'use client';
import Botao from "@/components/quartos/botao";
import Formulario from "@/components/quartos/formulario";
import Layout from "@/components/quartos/layout";
import Tabela from "@/components/quartos/tabela";
import Quarto from "@/core/Quarto";
import { atualizarQuarto, cadastrarQuarto, excluirQuarto, fetchQuartos } from "@/service/quartoService";
import { useEffect, useState } from "react";

export default function Quartos() {

  const [quarto, setQuarto] = useState<Quarto>(Quarto.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [quartos, setQuartos] = useState<Quarto[]>([]);


    useEffect(() => {
        if (visivel === 'tabela') {
        const loadQuartos = async () => {
        try { const dados = await fetchQuartos();
        setQuartos(dados);
        } catch (error) {
        console.error("Erro ao buscar quartos:", error);
        }}
        loadQuartos();
        } }, [visivel]);

    function quartoSelecionado(quarto: Quarto) {
        setQuarto(quarto)
        setVisivel('form')
    }



    async function quartoExcluido(quarto: Quarto) {
        const confirmacao =
        window.confirm("Tem certeza de que deseja excluir este quarto?");
        if (confirmacao) {
        try {
        if (quarto.id !== null) {
        await excluirQuarto(quarto.id);
        } else {
        console.error("quartoId é null!");
        }
        setQuartos(prevQuartos => prevQuartos.filter(ev => ev.id !== quarto.id));
        } catch (error) {
        console.error("Erro ao excluir quarto:", error);
        }}}
        
        function salvarOuAlterarQuarto(quarto: Quarto) {
            if (quarto.id) {
            alterarQuarto(quarto)
            } else {
            salvarQuarto(quarto)
            }
           }

           async function alterarQuarto(quarto: Quarto) {
            try {
            const quartoAtualizado = await atualizarQuarto(quarto);
            setVisivel("tabela");
            } catch (error) {
            console.error("Erro ao atualizar quarto:", error);
            }
           }
        

    

    async function salvarQuarto(quarto: Quarto) {
        try {
         const novoQuarto = await cadastrarQuarto(quarto);
         setVisivel("tabela");
         } catch (error) {
         console.error("Erro ao salvar quarto:", error);
         }
        }

        
        

      


    function novoQuarto() {
        setQuarto(Quarto.vazio())
        setVisivel("form")
       }

       
    

    

    return (
        <div className={`
 flex justify-center items-center h-screen
 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
 text-white`}>
            <Layout titulo="Cadastro de quartos">
                {visivel === 'tabela' ? (
                    <> <div className="flex justify-end">
                        <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
                            onClick={() => novoQuarto()}>
                            Novo quarto </Botao>
                    </div>
                        <Tabela quartos={quartos}
                            quartoSelecionado={quartoSelecionado}
                            quartoExcluido={quartoExcluido}></Tabela>
                    </>
                ) : ( <Formulario quarto={quarto}
                    quartoMudou={salvarOuAlterarQuarto}
                    cancelado={() => setVisivel('tabela')} /> 
                    )}
            </Layout>
        </div>
    )
}

