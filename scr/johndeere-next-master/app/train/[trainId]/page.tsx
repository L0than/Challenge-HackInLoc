"use client";

import IndoorMapWrapper from "@/components/IndoorMapWrapper";
import Toolbar from "@/components/Toolbar";
import useMapData from "@/hooks/useMapData";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { Navigation } from "@/utils/types";
import Sidebar from "@/components/Sidebar";

export default function TrainId() {
  // Estado para armazenar os parâmetros do trem e navegação
  const defaultPosition = "v40";
  const [trainParams, setTrainParams] = useState({ position: defaultPosition });
  const startPosition = defaultPosition;
  const [locations, setLocations] = useState<any[]>([]);
  const [navigation, setNavigation] = useState<Navigation>({
    start: startPosition,
    end: "",
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // Estado com os dados do mapa (substituindo o MapDataContext)
  const mapData = useMapData();
  // -------------- Mds to ficando loko ----------------

  // Coordenadas geográficas das quatro extremidades do galpão
  const latLonCorners = {
    topLeft: { lat: -23.573598, lon: -46.623037 },
    topRight: { lat: -23.574234, lon: -46.623152 },
    bottomLeft: { lat: -23.573350, lon: -46.624413 },
    bottomRight: { lat: -23.574021, lon: -46.624552 },
  };

  // Coordenadas cartesianas correspondentes às extremidades do galpão
  const cartesianCorners = {
    topLeft: { x: 65.105, y: 345 },
    topRight: { x: 1355.105, y: 345 },
    bottomLeft: { x: 65.105, y: 1005 },
    bottomRight: { x: 1355.105, y: 1005 },
  };

  // rotas
  const coordinates = [
    { id: "v1", cx: 65.105, cy: 345 },
    { id: "v2", cx: 95.105, cy: 345 },
    { id: "v3", cx: 125.105, cy: 345 },
    { id: "v4", cx: 155.105, cy: 345 },
    { id: "v5", cx: 185.105, cy: 345 },
    { id: "v6", cx: 215.105, cy: 345 },
    { id: "v7", cx: 245.105, cy: 345 },
    { id: "v8", cx: 275.105, cy: 345 },
    { id: "v9", cx: 305.105, cy: 345 },
    { id: "v10", cx: 335.105, cy: 345 },
    { id: "v11", cx: 365.105, cy: 345 },
    { id: "v12", cx: 395.105, cy: 345 },
    { id: "v13", cx: 425.105, cy: 345 },
    { id: "v14", cx: 455.105, cy: 345 },
    { id: "v15", cx: 485.105, cy: 345 },
    { id: "v16", cx: 515.105, cy: 345 },
    { id: "v17", cx: 545.105, cy: 345 },
    { id: "v18", cx: 575.105, cy: 345 },
    { id: "v19", cx: 605.105, cy: 345 },
    { id: "v20", cx: 635.105, cy: 345 },
    { id: "v21", cx: 665.105, cy: 345 },
    { id: "v22", cx: 695.105, cy: 345 },
    { id: "v23", cx: 725.105, cy: 345 },
    { id: "v24", cx: 755.105, cy: 345 },
    { id: "v25", cx: 785.105, cy: 345 },
    { id: "v26", cx: 815.105, cy: 345 },
    { id: "v27", cx: 845.105, cy: 345 },
    { id: "v28", cx: 875.105, cy: 345 },
    { id: "v29", cx: 905.105, cy: 345 },
    { id: "v30", cx: 935.105, cy: 345 },
    { id: "v31", cx: 965.105, cy: 345 },
    { id: "v32", cx: 995.105, cy: 345 },
    { id: "v33", cx: 1025.105, cy: 345 },
    { id: "v34", cx: 1055.105, cy: 345 },
    { id: "v35", cx: 1085.105, cy: 345 },
    { id: "v36", cx: 1115.105, cy: 345 },
    { id: "v37", cx: 1145.105, cy: 345 },
    { id: "v38", cx: 1175.105, cy: 345 },
    { id: "v39", cx: 1205.105, cy: 345 },
    { id: "v40", cx: 1235.105, cy: 345 },
    { id: "v41", cx: 1265.105, cy: 345 },
    { id: "v42", cx: 1295.105, cy: 345 },
    { id: "v43", cx: 1325.105, cy: 345 },
    { id: "v44", cx: 1355.105, cy: 345 },
    { id: "v45", cx: 65.105, cy: 375 },
    { id: "v46", cx: 65.105, cy: 405 },
    { id: "v47", cx: 65.105, cy: 435 },
    { id: "v48", cx: 65.105, cy: 465 },
    { id: "v49", cx: 65.105, cy: 495 },
    { id: "v50", cx: 65.105, cy: 525 },
    { id: "v51", cx: 65.105, cy: 555 },
    { id: "v52", cx: 65.105, cy: 585 },
    { id: "v53", cx: 65.105, cy: 615 },
    { id: "v54", cx: 65.105, cy: 645 },
    { id: "v55", cx: 65.105, cy: 675 },
    { id: "v56", cx: 65.105, cy: 705 },
    { id: "v57", cx: 65.105, cy: 735 },
    { id: "v58", cx: 65.105, cy: 765 },
    { id: "v59", cx: 65.105, cy: 795 },
    { id: "v60", cx: 65.105, cy: 825 },
    { id: "v61", cx: 65.105, cy: 855 },
    { id: "v62", cx: 65.105, cy: 885 },
    { id: "v63", cx: 65.105, cy: 915 },
    { id: "v64", cx: 65.105, cy: 945 },
    { id: "v65", cx: 65.105, cy: 975 },
    { id: "v66", cx: 65.105, cy: 1005 },
    { id: "v67", cx: 95.105, cy: 1005 },
    { id: "v68", cx: 125.105, cy: 1005 },
    { id: "v69", cx: 155.105, cy: 1005 },
    { id: "v70", cx: 185.105, cy: 1005 },
    { id: "v71", cx: 215.105, cy: 1005 },
    { id: "v72", cx: 245.105, cy: 1005 },
    { id: "v73", cx: 275.105, cy: 1005 },
    { id: "v74", cx: 305.105, cy: 1005 },
    { id: "v75", cx: 335.105, cy: 1005 },
    { id: "v76", cx: 365.105, cy: 1005 },
    { id: "v77", cx: 395.105, cy: 1005 },
    { id: "v78", cx: 425.105, cy: 1005 },
    { id: "v79", cx: 455.105, cy: 1005 },
    { id: "v80", cx: 485.105, cy: 1005 },
    { id: "v81", cx: 515.105, cy: 1005 },
    { id: "v82", cx: 545.105, cy: 1005 },
    { id: "v83", cx: 575.105, cy: 1005 },
    { id: "v84", cx: 605.105, cy: 1005 },
    { id: "v85", cx: 635.105, cy: 1005 },
    { id: "v86", cx: 665.105, cy: 1005 },
    { id: "v87", cx: 695.105, cy: 1005 },
    { id: "v88", cx: 725.105, cy: 1005 },
    { id: "v89", cx: 755.105, cy: 1005 },
    { id: "v90", cx: 785.105, cy: 1005 },
    { id: "v91", cx: 815.105, cy: 1005 },
    { id: "v92", cx: 845.105, cy: 1005 },
    { id: "v93", cx: 875.105, cy: 1005 },
    { id: "v94", cx: 905.105, cy: 1005 },
    { id: "v95", cx: 935.105, cy: 1005 },
    { id: "v96", cx: 965.105, cy: 1005 },
    { id: "v97", cx: 995.105, cy: 1005 },
    { id: "v98", cx: 1025.105, cy: 1005 },
    { id: "v99", cx: 1055.105, cy: 1005 },
    { id: "v100", cx: 1085.105, cy: 1005 },
    { id: "v101", cx: 1115.105, cy: 1005 },
    { id: "v102", cx: 1145.105, cy: 1005 },
    { id: "v103", cx: 1175.105, cy: 1005 },
    { id: "v104", cx: 1205.105, cy: 1005 },
    { id: "v105", cx: 1235.105, cy: 1005 },
    { id: "v106", cx: 1265.105, cy: 1005 },
    { id: "v107", cx: 1295.105, cy: 1005 },
    { id: "v108", cx: 1325.105, cy: 1005 },
    { id: "v109", cx: 1355.105, cy: 1005 },
    { id: "v110", cx: 1355.105, cy: 375 },
    { id: "v111", cx: 1355.105, cy: 405 },
    { id: "v112", cx: 1355.105, cy: 435 },
    { id: "v113", cx: 1355.105, cy: 465 },
    { id: "v114", cx: 1355.105, cy: 495 },
    { id: "v115", cx: 1355.105, cy: 525 },
    { id: "v116", cx: 1355.105, cy: 555 },
    { id: "v117", cx: 1355.105, cy: 585 },
    { id: "v118", cx: 1355.105, cy: 615 },
    { id: "v119", cx: 1355.105, cy: 645 },
    { id: "v120", cx: 1355.105, cy: 675 },
    { id: "v121", cx: 1355.105, cy: 705 },
    { id: "v122", cx: 1355.105, cy: 735 },
    { id: "v123", cx: 1355.105, cy: 765 },
    { id: "v124", cx: 1355.105, cy: 795 },
    { id: "v125", cx: 1355.105, cy: 825 },
    { id: "v126", cx: 1355.105, cy: 855 },
    { id: "v127", cx: 1355.105, cy: 885 },
    { id: "v128", cx: 1355.105, cy: 915 },
    { id: "v129", cx: 1355.105, cy: 945 },
    { id: "v130", cx: 1355.105, cy: 975 },
    { id: "v131", cx: 710.105, cy: 375 },
    { id: "v132", cx: 710.105, cy: 405 },
    { id: "v133", cx: 710.105, cy: 435 },
    { id: "v134", cx: 710.105, cy: 465 },
    { id: "v135", cx: 710.105, cy: 495 },
    { id: "v136", cx: 710.105, cy: 525 },
    { id: "v137", cx: 710.105, cy: 555 },
    { id: "v138", cx: 710.105, cy: 585 },
    { id: "v139", cx: 710.105, cy: 615 },
    { id: "v140", cx: 710.105, cy: 645 },
    { id: "v141", cx: 710.105, cy: 675 },
    { id: "v142", cx: 710.105, cy: 705 },
    { id: "v143", cx: 710.105, cy: 735 },
    { id: "v144", cx: 710.105, cy: 765 },
    { id: "v145", cx: 710.105, cy: 795 },
    { id: "v146", cx: 710.105, cy: 825 },
    { id: "v147", cx: 710.105, cy: 855 },
    { id: "v148", cx: 710.105, cy: 885 },
    { id: "v149", cx: 710.105, cy: 915 },
    { id: "v150", cx: 710.105, cy: 945 },
    { id: "v151", cx: 710.105, cy: 975 },
    { id: "v152", cx: 95.105, cy: 705 },
    { id: "v153", cx: 125.105, cy: 705 },
    { id: "v154", cx: 155.105, cy: 705 },
    { id: "v155", cx: 185.105, cy: 705 },
    { id: "v156", cx: 215.105, cy: 705 },
    { id: "v157", cx: 245.105, cy: 705 },
    { id: "v158", cx: 275.105, cy: 705 },
    { id: "v159", cx: 305.105, cy: 705 },
    { id: "v160", cx: 335.105, cy: 705 },
    { id: "v161", cx: 365.105, cy: 705 },
    { id: "v162", cx: 395.105, cy: 705 },
    { id: "v163", cx: 425.105, cy: 705 },
    { id: "v164", cx: 455.105, cy: 705 },
    { id: "v165", cx: 485.105, cy: 705 },
    { id: "v166", cx: 515.105, cy: 705 },
    { id: "v167", cx: 545.105, cy: 705 },
    { id: "v168", cx: 575.105, cy: 705 },
    { id: "v169", cx: 605.105, cy: 705 },
    { id: "v170", cx: 635.105, cy: 705 },
    { id: "v171", cx: 665.105, cy: 705 },
    { id: "v172", cx: 755.105, cy: 705 },
    { id: "v173", cx: 785.105, cy: 705 },
    { id: "v174", cx: 815.105, cy: 705 },
    { id: "v175", cx: 845.105, cy: 705 },
    { id: "v176", cx: 875.105, cy: 705 },
    { id: "v177", cx: 905.105, cy: 705 },
    { id: "v178", cx: 935.105, cy: 705 },
    { id: "v179", cx: 965.105, cy: 705 },
    { id: "v180", cx: 995.105, cy: 705 },
    { id: "v181", cx: 1025.105, cy: 705 },
    { id: "v182", cx: 1055.105, cy: 705 },
    { id: "v183", cx: 1085.105, cy: 705 },
    { id: "v184", cx: 1115.105, cy: 705 },
    { id: "v185", cx: 1145.105, cy: 705 },
    { id: "v186", cx: 1175.105, cy: 705 },
    { id: "v187", cx: 1205.105, cy: 705 },
    { id: "v188", cx: 1235.105, cy: 705 },
    { id: "v189", cx: 1265.105, cy: 705 },
    { id: "v190", cx: 1295.105, cy: 705 },
    { id: "v191", cx: 1325.105, cy: 705 },
  ];

  // Definição dos tipos para as coordenadas
  interface LatLon {
    lat: number;
    lon: number;
  }

  interface Cartesian {
    x: number;
    y: number;
  }

  // Função para interpolar coordenadas dentro do retângulo
  function interpolateCoord(
    lat: number,
    lon: number,
    latLonCorners: {
      topLeft: LatLon;
      topRight: LatLon;
      bottomLeft: LatLon;
      bottomRight: LatLon;
    },
    cartesianCorners: {
      topLeft: Cartesian;
      topRight: Cartesian;
      bottomLeft: Cartesian;
      bottomRight: Cartesian;
    }
  ): Cartesian {
    // Interpolação nas direções X e Y separadamente
    const ratioX =
      (lon - latLonCorners.topLeft.lon) /
      (latLonCorners.topRight.lon - latLonCorners.topLeft.lon);
    const ratioY =
      (lat - latLonCorners.topLeft.lat) /
      (latLonCorners.bottomLeft.lat - latLonCorners.topLeft.lat);

    // Interpolação das coordenadas cartesianas correspondentes
    const cartX =
      cartesianCorners.topLeft.x +
      ratioX * (cartesianCorners.topRight.x - cartesianCorners.topLeft.x);
    const cartY =
      cartesianCorners.topLeft.y +
      ratioY * (cartesianCorners.bottomLeft.y - cartesianCorners.topLeft.y);

    return { x: cartX, y: cartY };
  }

  // Função simplificada para encontrar o ID da coordenada mais próxima
  function findNearestCoordinate(
    x: number,
    y: number,
    coordinates: { id: string; cx: number; cy: number }[]
  ): string {
    return coordinates.reduce((nearest, coord) => {
      const currentDistance = Math.hypot(coord.cx - x, coord.cy - y);
      const nearestDistance = Math.hypot(nearest.cx - x, nearest.cy - y);
      return currentDistance < nearestDistance ? coord : nearest;
    }).id;
  }

  // Exemplo: coordenadas geográficas de um ponto no galpão

  // Converte as coordenadas geográficas para o sistema cartesiano local

  // Atualiza os parâmetros do trem quando o ponto de início da navegação muda
  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("/api/location");
      const data = await response.json();

      if (data && data.data && data.data.length > 0) {
        const lastLocation = data.data[data.data.length - 1]; // Pegue a última localização
        setLocations(data.data);

        // Converte a localização recebida para coordenadas cartesianas
        const cartesianCoords: Cartesian = interpolateCoord(
          lastLocation.latitude, // Acesse as propriedades corretas da localização
          lastLocation.longitude, // Aqui você deve ter certeza de que o nome está correto
          latLonCorners,
          cartesianCorners
        );

        // Agora, você pode usar `cartesianCoords` conforme necessário
        console.log("Coordenadas cartesianas:", cartesianCoords);

        // Se necessário, encontre a coordenada mais próxima
        const nearestId = findNearestCoordinate(
          cartesianCoords.x,
          cartesianCoords.y,
          coordinates
        );
        console.log("ID da coordenada mais próxima:", nearestId);

        // Atualize o estado ou realize outras ações aqui
        setNavigation({ start: nearestId });
      }
    }

    fetchLocations();

    const interval = setInterval(fetchLocations, 2000);
    setTrainParams({ position: navigation.start });
    return () => clearInterval(interval);
  }, [navigation.start]);

  return (
    <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
      {isDesktop && (
        <Sidebar
          navigation={navigation}
          setNavigation={setNavigation}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          objects={mapData.objects} // Passando os objetos diretamente
        />
      )}
      <main
        className={`flex w-full ${
          isDesktop && "-ml-96"
        } justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
      >
        {/* Passando os dados necessários diretamente como props */}
        <Toolbar
          navigation={navigation}
          setNavigation={setNavigation}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          objects={mapData.objects}
        />
        <div className="center w-full h-full">
          {/* Passando o estado do mapa como props */}
          <IndoorMapWrapper
            navigation={navigation}
            setNavigation={setNavigation}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            objects={mapData.objects} // Passando os objetos do mapData
          />
        </div>
      </main>
    </div>
  );
}
