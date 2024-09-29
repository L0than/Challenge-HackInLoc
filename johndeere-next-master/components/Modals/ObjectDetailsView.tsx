"use client";

import { useEffect, useState } from "react";
import { ObjectItem } from "../../utils/types";
import { FiNavigation } from "react-icons/fi";
import { DialogBody, DialogHeader } from "../ui/Dialog";

interface ObjectDetailsViewProps {
  object: ObjectItem;
  objectNavigation: () => void;
}

function ObjectDetailsView({
  object,
  objectNavigation,
}: ObjectDetailsViewProps) {
  // Estado para armazenar os dados do localStorage
  const [localStorageData, setLocalStorageData] = useState<any>(null);

  // Recupera os dados do localStorage na montagem do componente
  useEffect(() => {
    const rebocadorInfo = localStorage.getItem("rebocadorSolicitado");
    if (rebocadorInfo) {
      setLocalStorageData(JSON.parse(rebocadorInfo)); // Atualiza o estado com os dados do localStorage
    }
  }, []);

  return (
    <>
      <DialogHeader>
        <p>{object.categoryName}</p>
      </DialogHeader>
      <DialogBody>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-900">{object.name}</p>
          <p className="text-md text-gray-700">{object.desc}</p>
        </div>

        {/* Se os dados do localStorage existirem, mostrá-los aqui */}
        {localStorageData && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-semibold">Informações do Rebocador Solicitado:</h2>
            <p className="text-md text-gray-700">Setor: {localStorageData.operador}</p>
            <p className="text-md text-gray-700">Descrição: {localStorageData.descricao}</p>
            <p className="text-md text-gray-700">Solicitado em: {new Date(localStorageData.timestamp).toLocaleString()}</p>
          </div>
        )}

        <div className="inline-flex rounded-md right-0 bottom-0 p-2 absolute">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            onClick={objectNavigation}
          >
            <FiNavigation />
          </button>
        </div>
      </DialogBody>
    </>
  );
}

export default ObjectDetailsView;
