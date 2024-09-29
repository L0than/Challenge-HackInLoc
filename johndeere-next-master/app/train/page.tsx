"use client";

import Link from "next/link";

export default function Train() {
  const rebocadores = [
    { id: 1, nome: "Rebocador Alfa" },
    { id: 2, nome: "Rebocador Beta" },
    { id: 3, nome: "Rebocador Gamma" },
    { id: 4, nome: "Rebocador Delta" },
    { id: 5, nome: "Rebocador Épsilon" },
  ];

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
          <Link href="/operadores" className="text-white hover:underline">
            Voltar
          </Link>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6">Escolha o Rebocador</h1>

        {/* Painel de Rebocadores */}
        <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg">
          <ul>
            {rebocadores.map((rebocador) => (
              <li key={rebocador.id} className="py-4 border-b border-gray-300">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    {rebocador.nome}
                  </span>
                  <span className="text-gray-500">ID: {rebocador.id}</span>
                  {/* Link para a página de detalhes do rebocador, passando informações via state */}
                  <Link
                    href={{
                      pathname: `/train/v${rebocador.id}`,
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
