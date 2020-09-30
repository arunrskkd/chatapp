import React, { useEffect, useCallback, useState } from "react";
import Styles from "./chatwindow.module.scss";
import Sendicon from "../../assets/icons/sendicon";
import classnames from "classnames";
import Pusher from "pusher-js";
import { axiosapi } from "../../helpers/axios";

export default function Chatwindow({ user }) {
  const [inputtext, setinputtext] = useState("");

  const [chatmessage, setchatmessage] = useState([]);

  useEffect(() => {
    fetchmessages();
  }, []);

  useEffect(() => {
    const pusher = new Pusher("3c4a70cdbdd6a6f78fca", {
      cluster: "ap2",
       encrypted: true
    });

    const channel = pusher.subscribe("messagechannel");
    channel.bind("message", (data) => {
      setchatmessage((prev)=>{
        return  [...prev,data]
       })
     
    //  fetchmessages();
    
    });

    return () => {
      pusher.unsubscribe();
      pusher.unbind_all();
    };
  }, []);

 



  const fetchmessages = () => {
    axiosapi
      .get("messages/")
      .then((res) => {
        setchatmessage(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const oninputchange = (event) => {
    setinputtext(event.target.value);
  };

  const sendchat = (e) => {
    e.preventDefault();
    const data = {
      username: user,
      message: inputtext,
    };

    axiosapi
      .post("messages/addmessage", data)
      .then((res) => {
        setinputtext("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.containerchatbox}>
        <div className={Styles.header}>Chat</div>
        <div className={Styles.messagebox}>
          <ul>
            {chatmessage ? (
              chatmessage.map((msg, index) => (
                <li
                  key={index}
                  ref={chatmessage.length - 1 === index ? setRef : null}
                  className={classnames(
                    Styles.chatlist,
                    user === msg.username && Styles.alignleft
                  )}
                >
                  <div className={Styles.msgdata}>
                    {user === msg.username ? "You" : msg.username}
                  </div>
                  <div className={Styles.msg}>{msg.message}</div>
                </li>
              ))
            ) : (
              <div>Loading</div>
            )}
          </ul>
        </div>
        <form onSubmit={sendchat}>
        <div className={Styles.inputsection}>
          <input
            type="text"
            name="chattext"
            value={inputtext}
            onChange={oninputchange}
          />
          <button className={Styles.senticon} >
            <Sendicon />
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
