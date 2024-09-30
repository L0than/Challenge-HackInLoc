"use client";

interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      {/* ---------- Parte Superior esquerda do mapa ------------ */}
      <path
        id="Operador 1"
        className={`${className} object`}
        d="M100 365.508l171.452-.046.021 142.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 2"
        className={`${className} object`}
        d="M300.02 365.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 3"
        className={`${className} object`}
        d="M500.02 365.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />

      <path
        id="Operador 7"
        className={`${className} object`}
        d="M100 520.508l171.452-.046.021 142.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 8"
        className={`${className} object`}
        d="M300.02 520.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 9"
        className={`${className} object`}
        d="M500.02 520.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />

      {/* --------- Parte superior direita do mapa ------------ */}

      <path
        id="Operador 4"
        className={`${className} object`}
        d="M750 365.508l171.452-.046.021 142.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 5"
        className={`${className} object`}
        d="M950.02 365.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 6"
        className={`${className} object`}
        d="M1150.02 365.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />

      <path
        id="Operador 10"
        className={`${className} object`}
        d="M750 520.508l171.452-.046.021 142.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 11"
        className={`${className} object`}
        d="M950.02 520.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 12"
        className={`${className} object`}
        d="M1150.02 520.647l171.451-.046.022 142.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />

      {/* -----------Parte inferior esquerda do mapa---------------- */}
      <path
        id="Operador 13"
        className={`${className} object`}
        d="M100 745.508l171.452-.046.021 232.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 14"
        className={`${className} object`}
        d="M300.02 745.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 15"
        className={`${className} object`}
        d="M500.02 745.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />

      {/* -----------Parte inferior direita do mapa---------------- */}

      <path
        id="Operador 16"
        className={`${className} object`}
        d="M750 745.508l171.452-.046.021 232.906-171.458-.113-.015-232.747z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 17"
        className={`${className} object`}
        d="M950 745.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
      <path
        id="Operador 18"
        className={`${className} object`}
        d="M1150 745.647l171.451-.046.022 232.493-171.625.071.151-232.518z"
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;
