import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);

  const { user: userId = "" } = useContext(UserContext);

  return { photos };
}
