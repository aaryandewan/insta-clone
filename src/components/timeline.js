import React from "react";
import usePhotos from "../hooks/use-photos";
import Skeleton from "react-loading-skeleton";
import Post from "./post";

function Timeline() {
  const { photos } = usePhotos();
  console.log("PHOTOS === ", photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-4" />
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">
          Follow People to see some photos!
        </p>
      )}
    </div>
  );
}

export default Timeline;
