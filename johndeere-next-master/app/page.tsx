"use client";

import Link from "next/link";

export default function Home() {
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
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-8">Selecione uma Opção</h1>
        <div className="flex space-x-8">
          {/* Botão Operador */}
          <div className="flex flex-col items-center">
            <Link
              href={"/operator"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <img
                src={"https://cdn-icons-png.flaticon.com/512/7425/7425445.png"}
                alt="Operador"
                className="w-32 h-32 mb-4"
              />
              Operador
            </Link>
          </div>

          {/* Botão Rebocador */}
          <div className="flex flex-col items-center">
            <Link
              href={"/train"}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/hackathon-21e92.appspot.com/o/eu-removebg-preview.png?alt=media&token=0b8f1019-567d-4329-8984-026f56d7af6b   "
                }
                alt="Rebocador"
                className="w-32 h-32 mb-4"
              />
              Rebocador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
