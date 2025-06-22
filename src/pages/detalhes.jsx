import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { consultarCepCamada } from "../utils/consultaCep";

import Button from "../componets/button";

function Detalhes() {
  const { cep } = useParams(); // Pega o valor do parâmetro 'cep' da URL
  const navigate = useNavigate(); // Importado para possível redirecionamento de erro
  const [data, setData] = useState(null); // Estado para armazenar os dados do CEP
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para controlar erros

  useEffect(() => {
    const fetchCepData = async () => {
      setLoading(true); // Inicia o carregamento
      setError(null); // Limpa erros anteriores
      setData(null); // Limpa dados anteriores

      try {
        const result = await consultarCepCamada(cep);
        setData(result); // Atualiza o estado 'data' com o resultado da API
      } catch (err) {
        console.error("Erro ao buscar CEP:", err);
        setError(err.message || "Erro desconhecido ao buscar o CEP.");
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchCepData();
  }, [cep, navigate]);

  // Renderização condicional baseada nos estados de loading, error e data
  if (loading) {
    return (
      <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Carregando Detalhes do CEP...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-red-500 font-bold text-center">
            Erro ao Carregar CEP
          </h1>
          <p className="text-slate-100 text-center">{error}</p>
          {cep && (
            <p className="text-slate-100 text-center">CEP Buscado: {cep}</p>
          )}
        </div>
      </div>
    );
  }

  if (!data) {
    // Se não há dados e não está carregando nem com erro (ex: CEP não encontrado pela API, mas sem erro explícito)
    return (
      <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <div className="flex justify-center relative mb-6">
            <Button />
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              CEP Não Encontrado
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // Se tudo deu certo, exibe os detalhes do CEP
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <Button />
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes do CEP
          </h1>
        </div>

        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          {data.cep && (
            <h2 className="text-xl font-medium">CEP Consultado: {data.cep}</h2>
          )}
          {data.state && <p className="text-lg">Estado: {data.state}</p>}
          {data.city && <p className="text-lg">Cidade: {data.city}</p>}
          {data.neighborhood && (
            <p className="text-lg">Bairro: {data.neighborhood}</p>
          )}
          {data.street && <p className="text-lg">Rua: {data.street}</p>}
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
