export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}

export const graphData: GraphData = {
  vertices: [
    //locations parte superior
    { id: "v1", objectName: null, cx: 65.105, cy: 345 },
    { id: "v2", objectName: null, cx: 95.105, cy: 345 },
    { id: "v3", objectName: null, cx: 125.105, cy: 345 },
    { id: "v4", objectName: null, cx: 155.105, cy: 345 },
    { id: "v5", objectName: null, cx: 185.105, cy: 345 },
    { id: "v6", objectName: null, cx: 215.105, cy: 345 },
    { id: "v7", objectName: null, cx: 245.105, cy: 345 },
    { id: "v8", objectName: null, cx: 275.105, cy: 345 },
    { id: "v9", objectName: null, cx: 305.105, cy: 345 },
    { id: "v10", objectName: null, cx: 335.105, cy: 345 },
    { id: "v11", objectName: null, cx: 365.105, cy: 345 },
    { id: "v12", objectName: null, cx: 395.105, cy: 345 },
    { id: "v13", objectName: null, cx: 425.105, cy: 345 },
    { id: "v14", objectName: null, cx: 455.105, cy: 345 },
    { id: "v15", objectName: null, cx: 485.105, cy: 345 },
    { id: "v16", objectName: null, cx: 515.105, cy: 345 },
    { id: "v17", objectName: null, cx: 545.105, cy: 345 },
    { id: "v18", objectName: null, cx: 575.105, cy: 345 },
    { id: "v19", objectName: null, cx: 605.105, cy: 345 },
    { id: "v20", objectName: null, cx: 635.105, cy: 345 },
    { id: "v21", objectName: null, cx: 665.105, cy: 345 },
    { id: "v22", objectName: null, cx: 695.105, cy: 345 },
    { id: "v23", objectName: null, cx: 725.105, cy: 345 },
    { id: "v24", objectName: null, cx: 755.105, cy: 345 },
    { id: "v25", objectName: null, cx: 785.105, cy: 345 },
    { id: "v26", objectName: null, cx: 815.105, cy: 345 },
    { id: "v27", objectName: null, cx: 845.105, cy: 345 },
    { id: "v28", objectName: null, cx: 875.105, cy: 345 },
    { id: "v29", objectName: null, cx: 905.105, cy: 345 },
    { id: "v30", objectName: null, cx: 935.105, cy: 345 },
    { id: "v31", objectName: null, cx: 965.105, cy: 345 },
    { id: "v32", objectName: null, cx: 995.105, cy: 345 },
    { id: "v33", objectName: null, cx: 1025.105, cy: 345 },
    { id: "v34", objectName: null, cx: 1055.105, cy: 345 },
    { id: "v35", objectName: null, cx: 1085.105, cy: 345 },
    { id: "v36", objectName: null, cx: 1115.105, cy: 345 },
    { id: "v37", objectName: null, cx: 1145.105, cy: 345 },
    { id: "v38", objectName: null, cx: 1175.105, cy: 345 },
    { id: "v39", objectName: null, cx: 1205.105, cy: 345 },
    { id: "v40", objectName: null, cx: 1235.105, cy: 345 },
    { id: "v41", objectName: null, cx: 1265.105, cy: 345 },
    { id: "v42", objectName: null, cx: 1295.105, cy: 345 },
    { id: "v43", objectName: null, cx: 1325.105, cy: 345 },
    { id: "v44", objectName: null, cx: 1355.105, cy: 345 },
    { id: "v45", objectName: null, cx: 65.105, cy: 375 },
    { id: "v46", objectName: null, cx: 65.105, cy: 405 },
    { id: "v47", objectName: null, cx: 65.105, cy: 435 },
    { id: "v48", objectName: null, cx: 65.105, cy: 465 },
    { id: "v49", objectName: null, cx: 65.105, cy: 495 },
    { id: "v50", objectName: null, cx: 65.105, cy: 525 },
    { id: "v51", objectName: null, cx: 65.105, cy: 555 },
    { id: "v52", objectName: null, cx: 65.105, cy: 585 },
    { id: "v53", objectName: null, cx: 65.105, cy: 615 },
    { id: "v54", objectName: null, cx: 65.105, cy: 645 },
    { id: "v55", objectName: null, cx: 65.105, cy: 675 },
    { id: "v56", objectName: null, cx: 65.105, cy: 705 },
    { id: "v57", objectName: null, cx: 65.105, cy: 735 },
    { id: "v58", objectName: null, cx: 65.105, cy: 765 },
    { id: "v59", objectName: null, cx: 65.105, cy: 795 },
    { id: "v60", objectName: null, cx: 65.105, cy: 825 },
    { id: "v61", objectName: null, cx: 65.105, cy: 855 },
    { id: "v62", objectName: null, cx: 65.105, cy: 885 },
    { id: "v63", objectName: null, cx: 65.105, cy: 915 },
    { id: "v64", objectName: null, cx: 65.105, cy: 945 },
    { id: "v65", objectName: null, cx: 65.105, cy: 975 },
    { id: "v66", objectName: null, cx: 65.105, cy: 1005 },
    { id: "v67", objectName: null, cx: 95.105, cy: 1005 },
    { id: "v68", objectName: null, cx: 125.105, cy: 1005 },
    { id: "v69", objectName: null, cx: 155.105, cy: 1005 },
    { id: "v70", objectName: null, cx: 185.105, cy: 1005 },
    { id: "v71", objectName: null, cx: 215.105, cy: 1005 },
    { id: "v72", objectName: null, cx: 245.105, cy: 1005 },
    { id: "v73", objectName: null, cx: 275.105, cy: 1005 },
    { id: "v74", objectName: null, cx: 305.105, cy: 1005 },
    { id: "v75", objectName: null, cx: 335.105, cy: 1005 },
    { id: "v76", objectName: null, cx: 365.105, cy: 1005 },
    { id: "v77", objectName: null, cx: 395.105, cy: 1005 },
    { id: "v78", objectName: null, cx: 425.105, cy: 1005 },
    { id: "v79", objectName: null, cx: 455.105, cy: 1005 },
    { id: "v80", objectName: null, cx: 485.105, cy: 1005 },
    { id: "v81", objectName: null, cx: 515.105, cy: 1005 },
    { id: "v82", objectName: null, cx: 545.105, cy: 1005 },
    { id: "v83", objectName: null, cx: 575.105, cy: 1005 },
    { id: "v84", objectName: null, cx: 605.105, cy: 1005 },
    { id: "v85", objectName: null, cx: 635.105, cy: 1005 },
    { id: "v86", objectName: null, cx: 665.105, cy: 1005 },
    { id: "v87", objectName: null, cx: 695.105, cy: 1005 },
    { id: "v88", objectName: null, cx: 725.105, cy: 1005 },
    { id: "v89", objectName: null, cx: 755.105, cy: 1005 },
    { id: "v90", objectName: null, cx: 785.105, cy: 1005 },
    { id: "v91", objectName: null, cx: 815.105, cy: 1005 },
    { id: "v92", objectName: null, cx: 845.105, cy: 1005 },
    { id: "v93", objectName: null, cx: 875.105, cy: 1005 },
    { id: "v94", objectName: null, cx: 905.105, cy: 1005 },
    { id: "v95", objectName: null, cx: 935.105, cy: 1005 },
    { id: "v96", objectName: null, cx: 965.105, cy: 1005 },
    { id: "v97", objectName: null, cx: 995.105, cy: 1005 },
    { id: "v98", objectName: null, cx: 1025.105, cy: 1005 },
    { id: "v99", objectName: null, cx: 1055.105, cy: 1005 },
    { id: "v100", objectName: null, cx: 1085.105, cy: 1005 },
    { id: "v101", objectName: null, cx: 1115.105, cy: 1005 },
    { id: "v102", objectName: null, cx: 1145.105, cy: 1005 },
    { id: "v103", objectName: null, cx: 1175.105, cy: 1005 },
    { id: "v104", objectName: null, cx: 1205.105, cy: 1005 },
    { id: "v105", objectName: null, cx: 1235.105, cy: 1005 },
    { id: "v106", objectName: null, cx: 1265.105, cy: 1005 },
    { id: "v107", objectName: null, cx: 1295.105, cy: 1005 },
    { id: "v108", objectName: null, cx: 1325.105, cy: 1005 },
    { id: "v109", objectName: null, cx: 1355.105, cy: 1005 },
    { id: "v110", objectName: null, cx: 1355.105, cy: 375 },
    { id: "v111", objectName: null, cx: 1355.105, cy: 405 },
    { id: "v112", objectName: null, cx: 1355.105, cy: 435 },
    { id: "v113", objectName: null, cx: 1355.105, cy: 465 },
    { id: "v114", objectName: null, cx: 1355.105, cy: 495 },
    { id: "v115", objectName: null, cx: 1355.105, cy: 525 },
    { id: "v116", objectName: null, cx: 1355.105, cy: 555 },
    { id: "v117", objectName: null, cx: 1355.105, cy: 585 },
    { id: "v118", objectName: null, cx: 1355.105, cy: 615 },
    { id: "v119", objectName: null, cx: 1355.105, cy: 645 },
    { id: "v120", objectName: null, cx: 1355.105, cy: 675 },
    { id: "v121", objectName: null, cx: 1355.105, cy: 705 },
    { id: "v122", objectName: null, cx: 1355.105, cy: 735 },
    { id: "v123", objectName: null, cx: 1355.105, cy: 765 },
    { id: "v124", objectName: null, cx: 1355.105, cy: 795 },
    { id: "v125", objectName: null, cx: 1355.105, cy: 825 },
    { id: "v126", objectName: null, cx: 1355.105, cy: 855 },
    { id: "v127", objectName: null, cx: 1355.105, cy: 885 },
    { id: "v128", objectName: null, cx: 1355.105, cy: 915 },
    { id: "v129", objectName: null, cx: 1355.105, cy: 945 },
    { id: "v130", objectName: null, cx: 1355.105, cy: 975 },
    { id: "v131", objectName: null, cx: 710.105, cy: 375 },
    { id: "v132", objectName: null, cx: 710.105, cy: 405 },
    { id: "v133", objectName: null, cx: 710.105, cy: 435 },
    { id: "v134", objectName: null, cx: 710.105, cy: 465 },
    { id: "v135", objectName: null, cx: 710.105, cy: 495 },
    { id: "v136", objectName: null, cx: 710.105, cy: 525 },
    { id: "v137", objectName: null, cx: 710.105, cy: 555 },
    { id: "v138", objectName: null, cx: 710.105, cy: 585 },
    { id: "v139", objectName: null, cx: 710.105, cy: 615 },
    { id: "v140", objectName: null, cx: 710.105, cy: 645 },
    { id: "v141", objectName: null, cx: 710.105, cy: 675 },
    { id: "v142", objectName: null, cx: 710.105, cy: 705 },
    { id: "v143", objectName: null, cx: 710.105, cy: 735 },
    { id: "v144", objectName: null, cx: 710.105, cy: 765 },
    { id: "v145", objectName: null, cx: 710.105, cy: 795 },
    { id: "v146", objectName: null, cx: 710.105, cy: 825 },
    { id: "v147", objectName: null, cx: 710.105, cy: 855 },
    { id: "v148", objectName: null, cx: 710.105, cy: 885 },
    { id: "v149", objectName: null, cx: 710.105, cy: 915 },
    { id: "v150", objectName: null, cx: 710.105, cy: 945 },
    { id: "v151", objectName: null, cx: 710.105, cy: 975 },
    { id: "v152", objectName: null, cx: 95.105, cy: 705 },
    { id: "v153", objectName: null, cx: 125.105, cy: 705 },
    { id: "v154", objectName: null, cx: 155.105, cy: 705 },
    { id: "v155", objectName: null, cx: 185.105, cy: 705 },
    { id: "v156", objectName: null, cx: 215.105, cy: 705 },
    { id: "v157", objectName: null, cx: 245.105, cy: 705 },
    { id: "v158", objectName: null, cx: 275.105, cy: 705 },
    { id: "v159", objectName: null, cx: 305.105, cy: 705 },
    { id: "v160", objectName: null, cx: 335.105, cy: 705 },
    { id: "v161", objectName: null, cx: 365.105, cy: 705 },
    { id: "v162", objectName: null, cx: 395.105, cy: 705 },
    { id: "v163", objectName: null, cx: 425.105, cy: 705 },
    { id: "v164", objectName: null, cx: 455.105, cy: 705 },
    { id: "v165", objectName: null, cx: 485.105, cy: 705 },
    { id: "v166", objectName: null, cx: 515.105, cy: 705 },
    { id: "v167", objectName: null, cx: 545.105, cy: 705 },
    { id: "v168", objectName: null, cx: 575.105, cy: 705 },
    { id: "v169", objectName: null, cx: 605.105, cy: 705 },
    { id: "v170", objectName: null, cx: 635.105, cy: 705 },
    { id: "v171", objectName: null, cx: 665.105, cy: 705 },
    { id: "v172", objectName: null, cx: 755.105, cy: 705 },
    { id: "v173", objectName: null, cx: 785.105, cy: 705 },
    { id: "v174", objectName: null, cx: 815.105, cy: 705 },
    { id: "v175", objectName: null, cx: 845.105, cy: 705 },
    { id: "v176", objectName: null, cx: 875.105, cy: 705 },
    { id: "v177", objectName: null, cx: 905.105, cy: 705 },
    { id: "v178", objectName: null, cx: 935.105, cy: 705 },
    { id: "v179", objectName: null, cx: 965.105, cy: 705 },
    { id: "v180", objectName: null, cx: 995.105, cy: 705 },
    { id: "v181", objectName: null, cx: 1025.105, cy: 705 },
    { id: "v182", objectName: null, cx: 1055.105, cy: 705 },
    { id: "v183", objectName: null, cx: 1085.105, cy: 705 },
    { id: "v184", objectName: null, cx: 1115.105, cy: 705 },
    { id: "v185", objectName: null, cx: 1145.105, cy: 705 },
    { id: "v186", objectName: null, cx: 1175.105, cy: 705 },
    { id: "v187", objectName: null, cx: 1205.105, cy: 705 },
    { id: "v188", objectName: null, cx: 1235.105, cy: 705 },
    { id: "v189", objectName: null, cx: 1265.105, cy: 705 },
    { id: "v190", objectName: null, cx: 1295.105, cy: 705 },
    { id: "v191", objectName: null, cx: 1325.105, cy: 705 },
    // operations
    { id: "v192", objectName: "Operador 1", cx: 185.105, cy: 405 },
    { id: "v193", objectName: "Operador 2", cx: 395.105, cy: 405 },
    { id: "v194", objectName: "Operador 3", cx: 605.105, cy: 405 },
    { id: "v195", objectName: "Operador 4", cx: 845.105, cy: 405 },
  ],

  edges: [
    // operador 1
    { id: "v1_to_v192", from: "v1", to: "v5" },
    { id: "v2_to_v192", from: "v2", to: "v5" },
    { id: "v3_to_v192", from: "v3", to: "v5" },
    { id: "v4_to_v192", from: "v4", to: "v5" },
    { id: "v5_to_v192", from: "v5", to: "v192" },
    { id: "v6_to_v192", from: "v6", to: "v5" },
    { id: "v7_to_v192", from: "v7", to: "v5" },
    { id: "v8_to_v192", from: "v8", to: "v5" },
    { id: "v9_to_v192", from: "v9", to: "v5" },
    { id: "v10_to_v192", from: "v10", to: "v5" },
    { id: "v11_to_v192", from: "v11", to: "v5" },
    { id: "v12_to_v192", from: "v12", to: "v5" },
    { id: "v13_to_v192", from: "v13", to: "v5" },
    { id: "v14_to_v192", from: "v14", to: "v5" },
    { id: "v15_to_v192", from: "v15", to: "v5" },
    { id: "v16_to_v192", from: "v16", to: "v5" },
    { id: "v17_to_v192", from: "v17", to: "v5" },
    { id: "v18_to_v192", from: "v18", to: "v5" },
    { id: "v19_to_v192", from: "v19", to: "v5" },
    { id: "v20_to_v192", from: "v20", to: "v5" },
    { id: "v21_to_v192", from: "v21", to: "v5" },
    { id: "v22_to_v192", from: "v22", to: "v5" },
    { id: "v23_to_v192", from: "v23", to: "v5" },
    { id: "v24_to_v192", from: "v24", to: "v5" },
    { id: "v25_to_v192", from: "v25", to: "v5" },
    { id: "v26_to_v192", from: "v26", to: "v5" },
    { id: "v27_to_v192", from: "v27", to: "v5" },
    { id: "v28_to_v192", from: "v28", to: "v5" },
    { id: "v29_to_v192", from: "v29", to: "v5" },
    { id: "v30_to_v192", from: "v30", to: "v5" },
    { id: "v31_to_v192", from: "v31", to: "v5" },
    { id: "v32_to_v192", from: "v32", to: "v5" },
    { id: "v33_to_v192", from: "v33", to: "v5" },
    { id: "v34_to_v192", from: "v34", to: "v5" },
    { id: "v35_to_v192", from: "v35", to: "v5" },
    { id: "v36_to_v192", from: "v36", to: "v5" },
    { id: "v37_to_v192", from: "v37", to: "v5" },
    { id: "v38_to_v192", from: "v38", to: "v5" },
    { id: "v39_to_v192", from: "v39", to: "v5" },
    { id: "v40_to_v192", from: "v40", to: "v5" },
    { id: "v41_to_v192", from: "v41", to: "v5" },
    { id: "v42_to_v192", from: "v42", to: "v5" },
    { id: "v43_to_v192", from: "v43", to: "v5" },
    { id: "v44_to_v192", from: "v44", to: "v5" },
    { id: "v45_to_v192", from: "v45", to: "v1" },
    { id: "v46_to_v192", from: "v46", to: "v1" },
    { id: "v47_to_v192", from: "v47", to: "v1" },
    { id: "v48_to_v192", from: "v48", to: "v1" },
    { id: "v49_to_v192", from: "v49", to: "v1" },
    { id: "v50_to_v192", from: "v50", to: "v1" },
    { id: "v51_to_v192", from: "v51", to: "v1" },
    { id: "v52_to_v192", from: "v52", to: "v1" },
    { id: "v53_to_v192", from: "v53", to: "v1" },
    { id: "v54_to_v192", from: "v54", to: "v1" },
    { id: "v55_to_v192", from: "v55", to: "v1" },
    { id: "v56_to_v192", from: "v56", to: "v1" },
    { id: "v57_to_v192", from: "v57", to: "v1" },
    { id: "v58_to_v192", from: "v58", to: "v1" },
    { id: "v59_to_v192", from: "v59", to: "v1" },
    { id: "v60_to_v192", from: "v60", to: "v1" },
    { id: "v61_to_v192", from: "v61", to: "v1" },
    { id: "v62_to_v192", from: "v62", to: "v1" },
    { id: "v63_to_v192", from: "v63", to: "v1" },
    { id: "v64_to_v192", from: "v64", to: "v1" },
    { id: "v65_to_v192", from: "v65", to: "v1" },
    { id: "v66_to_v192", from: "v66", to: "v1" },
    { id: "v67_to_v192", from: "v67", to: "v66" },
    { id: "v68_to_v192", from: "v68", to: "v66" },
    { id: "v69_to_v192", from: "v69", to: "v66" },
    { id: "v70_to_v192", from: "v70", to: "v66" },
    { id: "v71_to_v192", from: "v71", to: "v66" },
    { id: "v72_to_v192", from: "v72", to: "v66" },
    { id: "v73_to_v192", from: "v73", to: "v66" },
    { id: "v74_to_v192", from: "v74", to: "v66" },
    { id: "v75_to_v192", from: "v75", to: "v66" },
    { id: "v76_to_v192", from: "v76", to: "v66" },
    { id: "v77_to_v192", from: "v77", to: "v66" },
    { id: "v78_to_v192", from: "v78", to: "v66" },
    { id: "v79_to_v192", from: "v79", to: "v66" },
    { id: "v80_to_v192", from: "v80", to: "v66" },
    { id: "v81_to_v192", from: "v81", to: "v66" },
    { id: "v82_to_v192", from: "v82", to: "v66" },
    { id: "v83_to_v192", from: "v83", to: "v66" },
    { id: "v84_to_v192", from: "v84", to: "v66" },
    { id: "v85_to_v192", from: "v85", to: "v66" },
    { id: "v86_to_v192", from: "v86", to: "v66" },
    { id: "v87_to_v192", from: "v87", to: "v22" },
    { id: "v88_to_v192", from: "v88", to: "v22" },
    { id: "v89_to_v192", from: "v89", to: "v88" },
    { id: "v90_to_v192", from: "v90", to: "v88" },
    { id: "v91_to_v192", from: "v91", to: "v88" },
    { id: "v92_to_v192", from: "v92", to: "v88" },
    { id: "v93_to_v192", from: "v93", to: "v88" },
    { id: "v94_to_v192", from: "v94", to: "v88" },
    { id: "v95_to_v192", from: "v95", to: "v88" },
    { id: "v96_to_v192", from: "v96", to: "v88" },
    { id: "v97_to_v192", from: "v97", to: "v88" },
    { id: "v98_to_v192", from: "v98", to: "v88" },
    { id: "v99_to_v192", from: "v99", to: "v88" },
    { id: "v100_to_v192", from: "v100", to: "v88" },
    { id: "v101_to_v192", from: "v101", to: "v88" },
    { id: "v102_to_v192", from: "v102", to: "v88" },
    { id: "v103_to_v192", from: "v103", to: "v88" },
    { id: "v104_to_v192", from: "v104", to: "v88" },
    { id: "v105_to_v192", from: "v105", to: "v88" },
    { id: "v106_to_v192", from: "v106", to: "v88" },
    { id: "v107_to_v192", from: "v107", to: "v88" },
    { id: "v108_to_v192", from: "v108", to: "v88" },
    { id: "v109_to_v192", from: "v109", to: "v88" },
    { id: "v110_to_v192", from: "v110", to: "v44" },
    { id: "v111_to_v192", from: "v111", to: "v44" },
    { id: "v112_to_v192", from: "v112", to: "v44" },
    { id: "v113_to_v192", from: "v113", to: "v44" },
    { id: "v114_to_v192", from: "v114", to: "v44" },
    { id: "v115_to_v192", from: "v115", to: "v44" },
    { id: "v116_to_v192", from: "v116", to: "v44" },
    { id: "v117_to_v192", from: "v117", to: "v44" },
    { id: "v118_to_v192", from: "v118", to: "v44" },
    { id: "v119_to_v192", from: "v119", to: "v44" },
    { id: "v120_to_v192", from: "v120", to: "v44" },
    { id: "v121_to_v192", from: "v121", to: "v142" },
    { id: "v122_to_v192", from: "v122", to: "v121" },
    { id: "v123_to_v192", from: "v123", to: "v121" },
    { id: "v124_to_v192", from: "v124", to: "v121" },
    { id: "v125_to_v192", from: "v125", to: "v121" },
    { id: "v127_to_v192", from: "v127", to: "v121" },
    { id: "v128_to_v192", from: "v128", to: "v121" },
    { id: "v129_to_v192", from: "v129", to: "v121" },
    { id: "v130_to_v192", from: "v130", to: "v121" },
    { id: "v131_to_v192", from: "v131", to: "v22" },
    { id: "v132_to_v192", from: "v132", to: "v131" },
    { id: "v133_to_v192", from: "v133", to: "v131" },
    { id: "v134_to_v192", from: "v134", to: "v131" },
    { id: "v135_to_v192", from: "v135", to: "v131" },
    { id: "v136_to_v192", from: "v136", to: "v131" },
    { id: "v137_to_v192", from: "v137", to: "v131" },
    { id: "v138_to_v192", from: "v138", to: "v131" },
    { id: "v139_to_v192", from: "v139", to: "v131" },
    { id: "v140_to_v192", from: "v140", to: "v131" },
    { id: "v141_to_v192", from: "v141", to: "v131" },
    { id: "v142_to_v192", from: "v142", to: "v131" },
    { id: "v143_to_v192", from: "v143", to: "v131" },
    { id: "v144_to_v192", from: "v144", to: "v131" },
    { id: "v145_to_v192", from: "v145", to: "v131" },
    { id: "v146_to_v192", from: "v146", to: "v131" },
    { id: "v147_to_v192", from: "v147", to: "v131" },
    { id: "v148_to_v192", from: "v148", to: "v131" },
    { id: "v149_to_v192", from: "v149", to: "v131" },
    { id: "v150_to_v192", from: "v150", to: "v131" },
    { id: "v151_to_v192", from: "v151", to: "v131" },
    { id: "v152_to_v192", from: "v152", to: "v56" },
    { id: "v153_to_v192", from: "v153", to: "v56" },
    { id: "v154_to_v192", from: "v154", to: "v56" },
    { id: "v155_to_v192", from: "v155", to: "v56" },
    { id: "v156_to_v192", from: "v156", to: "v56" },
    { id: "v157_to_v192", from: "v157", to: "v56" },
    { id: "v158_to_v192", from: "v158", to: "v56" },
    { id: "v159_to_v192", from: "v159", to: "v56" },
    { id: "v160_to_v192", from: "v160", to: "v56" },
    { id: "v161_to_v192", from: "v161", to: "v56" },
    { id: "v162_to_v192", from: "v162", to: "v56" },
    { id: "v163_to_v192", from: "v163", to: "v56" },
    { id: "v164_to_v192", from: "v164", to: "v56" },
    { id: "v165_to_v192", from: "v165", to: "v56" },
    { id: "v166_to_v192", from: "v166", to: "v56" },
    { id: "v167_to_v192", from: "v167", to: "v56" },
    { id: "v168_to_v192", from: "v168", to: "v56" },
    { id: "v169_to_v192", from: "v169", to: "v56" },
    { id: "v170_to_v192", from: "v170", to: "v56" },
    { id: "v171_to_v192", from: "v171", to: "v56" },
    { id: "v172_to_v192", from: "v172", to: "v142" },
    { id: "v173_to_v192", from: "v173", to: "v142" },
    { id: "v174_to_v192", from: "v174", to: "v142" },
    { id: "v175_to_v192", from: "v175", to: "v142" },
    { id: "v176_to_v192", from: "v176", to: "v142" },
    { id: "v177_to_v192", from: "v177", to: "v142" },
    { id: "v178_to_v192", from: "v178", to: "v142" },
    { id: "v179_to_v192", from: "v179", to: "v142" },
    { id: "v180_to_v192", from: "v180", to: "v142" },
    { id: "v181_to_v192", from: "v181", to: "v142" },
    { id: "v182_to_v192", from: "v182", to: "v142" },
    { id: "v183_to_v192", from: "v183", to: "v142" },
    { id: "v184_to_v192", from: "v184", to: "v142" },
    { id: "v185_to_v192", from: "v185", to: "v142" },
    { id: "v186_to_v192", from: "v186", to: "v142" },
    { id: "v187_to_v192", from: "v187", to: "v142" },
    { id: "v188_to_v192", from: "v188", to: "v142" },
    { id: "v189_to_v192", from: "v189", to: "v142" },
    { id: "v190_to_v192", from: "v190", to: "v142" },
    { id: "v191_to_v192", from: "v191", to: "v142" },
    // operador 2
  ],
};