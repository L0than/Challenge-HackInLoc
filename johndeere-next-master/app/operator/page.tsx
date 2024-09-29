"use client";

import Link from "next/link";
import { useState } from "react";

export default function Operator() {
  const setores = [
    "Setor-1",
    "Setor-2",
    "Setor-3",
    "Setor-4",
    "Setor-5",
    "Setor-6",
    "Setor-7",
    "Setor-8",
    "Setor-9",
    "Setor-10",
    "Setor-11",
    "Setor-12",
    "Setor-13",
    "Setor-14",
    "Setor-15",
    "Setor-16",
    "Setor-17",
    "Setor-18",
  ];

  // Estado para pesquisa
  const [filtro, setFiltro] = useState("");

  // Função para atualizar o filtro
  const handleChange = (e: any) => {
    setFiltro(e.target.value);
  };

  // Filtrar setores com base no que o usuário digitar
  const setoresFiltrados = setores.filter((setor) =>
    setor.toLowerCase().includes(filtro.toLowerCase())
  );

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
          <Link href="/" className="text-white hover:underline">
            Voltar
          </Link>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mt-8 mb-4">Setor do Operador</h1>

        {/* Input de Pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar setores..."
          value={filtro}
          onChange={handleChange}
          className="px-4 py-2 mb-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Lista de Setores com Scroll */}
        <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4 h-64 overflow-y-auto">
          {setoresFiltrados.length > 0 ? (
            setoresFiltrados.map((setor, index) => (
              <li
                key={index}
                className="py-2 px-4 border-b last:border-none border-gray-300"
              >
                {/* Link para a página de detalhes do setor */}
                <Link
                  href={`/operator/${setor.toLowerCase()}`}
                  className="text-blue-500 hover:underline"
                >
                  {setor}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-center py-4 text-gray-500">
              Nenhum setor encontrado
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
