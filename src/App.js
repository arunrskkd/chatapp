import React, { useEffect, useState } from "react";
import Styles from "./app.module.scss";
import Login from "./pages/login";
import Chatwindow from './pages/chatwindow';
import firebasedb from './config/firebaseauth';


export default function App() {

  const [username, setusername] = useState(null);
  const [messages, setmessages] = useState([]);

  const onenterusername = (name) => {
    setusername(name);
  }

  useEffect(() => {

    firebasedb.collection('messages').orderBy("created").onSnapshot((database)=>{
      setmessages(database.docs.map(doc => doc.data()))
    })
 
  });

  return (
    <>
     {   username ?    <Chatwindow user={username} messages={messages} />   :   <Login onenterusername={onenterusername}/>   }
    </>
  )
 
}
