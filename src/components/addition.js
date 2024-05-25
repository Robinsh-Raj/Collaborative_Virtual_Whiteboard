import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function Addition()
{
    const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedNum1 = parseInt(localStorage.getItem('num1')) || 0;
    const savedNum2 = parseInt(localStorage.getItem('num2')) || 0;
    setNum1(savedNum1);
    setNum2(savedNum2);
  }, []);

  // Update local storage whenever num1 or num2 changes
  useEffect(() => {
    localStorage.setItem('num1', num1.toString());
    localStorage.setItem('num2', num2.toString());
  }, [num1, num2]);

  // Calculate the result and update it
  useEffect(() => {
    setResult(num1 + num2);
  }, [num1, num2]);

  return (
    <div>
      <h1>Addition of two numbers</h1>
      <input
        type="number"
        placeholder="Enter the first number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter the second number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <p>Result: {result}</p>
    </div>

    


    );
}
export default Addition;