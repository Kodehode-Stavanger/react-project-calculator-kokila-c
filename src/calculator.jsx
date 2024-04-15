// Calculator.jsx
import React, { useState } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
        setResult(""); // Clear the result after setting it to input
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // Remove the last character from the input
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <InputBox value={input} onChange={setInput} />
      <div className="buttons">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button
          value="DEL"
          onClick={handleClick}
          style={{ backgroundColor: "grey", color: "white" }}
        />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
      </div>
      <div className="big-btn">
        <Button
          value="RESET"
          onClick={handleClick}
          style={{ backgroundColor: "grey", color: "white" }}
        />
        <Button
          value="="
          onClick={handleClick}
          style={{ backgroundColor: " hsl(6, 63%, 50%)", color: "white" }}
        />
      </div>
    </div>
  );
}

export default Calculator;
