"use client";

import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "./EditPositionButton";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";
import { Navigation, ObjectItem } from "@/utils/types";

interface ToolbarProps {
  navigation: Navigation;
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  objects: ObjectItem[];
}

export default function Toolbar({
  navigation,
  setNavigation,
  isEditMode,
  setIsEditMode,
  objects,
}: ToolbarProps) {
  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <SearchBar
        navigation={navigation}
        setNavigation={setNavigation}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        objects={objects} // Passando os objetos como props
      />
      <EditPositionButton
        navigation={navigation}
        setNavigation={setNavigation}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
      {navigation.end && isDesktop && (
        <DesktopRouteDetails
          objects={objects} // Passando objetos como prop
          navigation={navigation} // Passando navigation como prop
          setNavigation={setNavigation} // Passando setNavigation como prop
        />
      )}
    </div>
  );
}
