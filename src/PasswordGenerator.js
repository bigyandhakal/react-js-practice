import React, { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [characters, setCharacters] = useState("");

  function generatePass() {
    let pass = "";
    for (let i = 1; i <= 10; i++) {
      let char = Math.floor(Math.random() * characters.length + 1);
      pass += characters.charAt(char);
    }

    return pass;
  }

  const handlePassword = () => {
    const passValue = generatePass();
    setPassword(passValue);
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCharacters((val) => val + value);
    } else {
      setCharacters((val) => val.replace(value, ""));
    }
  };
   console.log(characters)
  return (
    <>
      <p>
        Random password: <strong>{password}</strong>
      </p>
      <button onClick={handlePassword}>Generate Password</button>
      <label>ABCD</label>
      <input
        type="checkbox"
        value="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        onClick={handleCheckbox}
      />
      <label>abcd</label>
      <input
        type="checkbox"
        value="abcdefghijklmnopqrstuvwxyz"
        onClick={handleCheckbox}
      />
      <label>123</label>
      <input type="checkbox" value="0123456789" onClick={handleCheckbox} />
      <label>@#$!&</label>
      <input type="checkbox" value="@#$!&" onClick={handleCheckbox} />
    </>
  );
}
