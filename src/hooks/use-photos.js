import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";
export default function usePhotos() {
  const [photos, setPhotos] = useState(null);

  //this is a cool destructuring technique!
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      //following is correct
      //   console.log("ZYZZ follwoing", following);
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    getTimelinePhotos();
    // if(userId){
    //     getTimelinePhotos();
    // }
  }, [userId]);

  return { photos };
}
