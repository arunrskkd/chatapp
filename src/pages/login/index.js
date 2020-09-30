import React, { useEffect, useRef, useState } from "react";
import Styles from "./login.module.scss";

export default function Login({ onenterusername }) {

  const [inputtext, setinputtext] = useState(null);



  const handlesubmitform = (e) => {
    e.preventDefault();
    onenterusername(inputtext);
  };

  const oninpchange = (e) => {
    setinputtext(e.target.value)
  }
  return (
    <div className={Styles.containerchat}>
      <div className={Styles.container}>
        <div className={Styles.sectone}>
          <form onSubmit={handlesubmitform}>
            <h2>Enter your name</h2>
            <div className={Styles.input}>
              <input  type="text" name="username" required onChange={oninpchange}/>
            </div>
            <button type="submit" className={Styles.btn}>
              Enter Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
