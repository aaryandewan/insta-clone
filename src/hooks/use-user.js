import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from "../services/firebase";
import UserContext from "../context/user";

export default function useUser(userId) {
  //jugad: this below line me, origannly it was empty, no obj inside
  const [activeUser, setActiveUser] = useState({
    fullName: "",
    username: "",
    userId: "",
  });
  let { user } = useContext(UserContext);

  //jugad
  // user = {
  //   fullName: "",
  //   username: "",
  //   userId: "",
  // };

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [response] = await getUserByUserId(user?.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}
