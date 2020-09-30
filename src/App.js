import React, { useEffect, useState } from "react";
import Login from "./pages/login";
import Chatwindow from "./pages/chatwindow";
import { axiosapi } from "./helpers/axios";

export default function App() {
  const [username, setusername] = useState(null);
 

  const onenterusername = (name) => {
    setusername(name);
  };


  return (
    <>
      {username ? (
        <Chatwindow user={username}  />
      ) : (
        <Login onenterusername={onenterusername} />
      )}
    </>
  );
}
