import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

function Sidebar() {
  const { user } = useUser();
  let { fullName, username, userId } = user;
  console.log("USER:", user);
  if (user) {
    console.log(fullName, username, userId);
  }
  return (
    <div>
      <User username={username} fullName={fullName} userId={userId} />
      <Suggestions />
    </div>
  );
}

export default Sidebar;
