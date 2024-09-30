"use client";

import { ReactNode } from "react";
interface MapBackgroundProps {
  children: ReactNode;
}

function MapBackground({ children }: MapBackgroundProps) {
  return (
    <svg
      //same as mall-floor-plan.svg viewBox
      viewBox="0.469 0.006 1461.95 1149.136"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image
        id="background"
        width="100%"
        height="100%"
        href={
          "https://firebasestorage.googleapis.com/v0/b/hackathon-21e92.appspot.com/o/mall-floor-plan.svg?alt=media&token=1daac67f-6b66-42da-b92c-4d34f5b7879f"
        }
      />
      {children}
    </svg>
  );
}

export default MapBackground;
