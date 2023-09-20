import React, { useRef, useState } from "react";

export default function Form() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleUpdateClick = () => {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    
  };

  return (
    <form>
      <input placeholder="email" size={30} ref={emailRef} value={emailValue} onChange={handleEmail}/>
      <input  placeholder="password" size={30} ref={passwordRef} value={passwordValue} onChange={handlePassword}/>
      <br />
      <button type="button" onClick={handleUpdateClick}>
        Update
      </button>
    </form>
  );
}
