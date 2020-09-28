import React, { useEffect, useCallback , useState, useRef } from "react";
import Styles from "./chatwindow.module.scss";
import Sendicon from "../../assets/icons/sendicon";
import classnames from "classnames";
import firebasedb from "../../config/firebaseauth";
import firebase from "firebase";

export default function Chatwindow({ user, messages }) {
  


  const setRef =  useCallback(
    (node) => {

      if(node){
        node.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  )

  const [inputmessage, setinputmessage] = useState(null);

  const [chatmessage, setchatmessage] = useState(messages);

  const oninputchange = (event) => {
    setinputmessage(event.target.value);
  };

  const sendchat = () => {
    firebasedb.collection("messages").add({
      username: user,
      message: inputmessage,
      created: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    setinputmessage("");
   
  };

  useEffect(() => {
    setchatmessage(messages);

  }, [messages]);

 

  return (
    <div className={Styles.container}>
      <div className={Styles.containerchatbox}>
        <div className={Styles.header}>Chat</div>
        <div className={Styles.messagebox}>
          <ul>
            {
          
            chatmessage ? chatmessage.map((msg, index) => 
              
              
                (
                  <li
                  key={index}
                    ref={chatmessage.length - 1 === index ? setRef  : null}
                    className={classnames(
                      Styles.chatlist,
                      user === msg.username && Styles.alignleft
                    )}
                  >
                    <div className={Styles.msgdata}>{ user === msg.username ?   'You' : msg.username}</div>
                    <div className={Styles.msg}>{msg.message}</div>
                  </li>
                )
            ) : (
              <div>Loading</div>
            )
            
            }
          </ul>
        </div>
        <div className={Styles.inputsection}>
          <input
            type="text"
            name="chattext"
            value={inputmessage}
            onChange={oninputchange}
          />
          <div className={Styles.senticon} onClick={sendchat}>
            <Sendicon />
          </div>
        </div>
      </div>
    </div>
  );
}
