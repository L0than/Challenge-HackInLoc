"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function OperatorId() {
  const { operatorId } = useParams(); // Pega o nome do operador da URL
  const [descricao, setDescricao] = useState(""); // Estado para a descrição
  const [rebocadorSolicitado, setRebocadorSolicitado] = useState(false); // Estado para controle do rebocador solicitado

  // Função para lidar com a mudança no input da descrição
  const handleDescricaoChange = (e: any) => {
    setDescricao(e.target.value);
  };

  // Função para lidar com o clique no botão de solicitar rebocador
  const solicitarRebocador = () => {
    setRebocadorSolicitado(true); // Atualiza o estado para indicar que o rebocador foi solicitado
    // Salva a informação no localStorage
    localStorage.setItem(
      "rebocadorSolicitado",
      JSON.stringify({
        operador: operatorId,
        descricao: descricao,
        timestamp: new Date().toISOString(), // Salva o horário da solicitação
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-green-700 text-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/hackathon-21e92.appspot.com/o/John_Deere-Logo.wine.svg?alt=media&token=a7bca9f6-f215-44b0-a58d-9353be1fd61a"
            }
            alt="John Deere Logo"
            className="w-12 h-12 mr-4"
          />
          <span className="text-2xl font-bold">John Deere</span>
        </div>
        <div>
          <Link href="/operator" className="text-white hover:underline">
            Voltar
          </Link>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6">{operatorId}</h1>

        {/* Painel de Descrição */}
        <div className="w-full max-w-2xl bg-white p-6 shadow-lg rounded-lg mb-8">
          {rebocadorSolicitado ? (
            // Exibe mensagem de rebocador solicitado após solicitação
            <div>
              <h2 className="text-2xl font-bold mb-4">Rebocador Solicitado</h2>
              <p className="text-gray-700 mb-4">Descrição: {descricao}</p>
              <div className="flex w-full justify-end self-end">
                <RefreshCw className="animate-spin text-green-400" />
              </div>
            </div>
          ) : (
            // Exibe o painel de descrição antes da solicitação
            <div>
              <h2 className="text-2xl font-bold mb-4">Adicionar Descrição</h2>
              <textarea
                value={descricao}
                onChange={handleDescricaoChange}
                placeholder="Digite a descrição aqui..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}
        </div>

        {/* Botão para Solicitar Rebocador */}
        <button
          onClick={solicitarRebocador}
          disabled={rebocadorSolicitado} // Desabilita o botão após a solicitação
          className={`fixed bottom-8 right-8 font-bold py-4 px-6 rounded-lg shadow-lg 
            ${
              rebocadorSolicitado
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
        >
          {rebocadorSolicitado ? "Rebocador Solicitado" : "Solicitar Rebocador"}
        </button>
      </div>
    </div>
  );
}
