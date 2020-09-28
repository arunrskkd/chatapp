import React, { useRef } from "react";
import Styles from "./login.module.scss";

export default function Login({ onenterusername }) {
  const inpref = useRef();

  const handlesubmitform = (e) => {
    e.preventDefault();
    onenterusername(inpref.current.value);
  };

  return (
    <div className={Styles.containerchat}>
      <div className={Styles.container}>
        <div className={Styles.sectone}>
          <form onSubmit={handlesubmitform}>
            <h2>Enter your name</h2>
            <div className={Styles.input}>
              <input ref={inpref} type="text" name="username" required />
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
