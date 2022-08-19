import React from "react";
import usePhotos from "../hooks/use-photos";

function Timeline() {
  const { photos } = usePhotos();
  console.log("PHOTOS === ", photos);
  return <div>timeline</div>;
}

export default Timeline;
