"use client";

import { FiMapPin } from "react-icons/fi";
import Tooltip from "./ui/Tooltip";
import { NavigationContextType } from "../utils/types";
import { resetEdges } from "../utils/navigationHelper";

interface EditPositionButtonProps {
  navigation: NavigationContextType["navigation"];
  setNavigation: NavigationContextType["setNavigation"];
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditPositionButton({
  navigation,
  setNavigation,
  isEditMode,
  setIsEditMode,
}: EditPositionButtonProps) {
  function handleEdit() {
    setIsEditMode(!isEditMode);
    resetEdges();
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "",
    }));
  }

  return (
    <Tooltip content="Change Position" className="bg-green-500">
      <button
        data-tooltip-target="tooltip-default"
        className="ml-1 h-12 w-12 bg-green-500 center rounded text-white"
        onClick={() => handleEdit()}
        aria-label="change position"
      >
        <FiMapPin />
      </button>
    </Tooltip>
  );
}

export default EditPositionButton;
