import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };
  const handleEquals = () => {
    try {
      // Replace scientific function symbols with their corresponding Math function calls
      let result = input
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')  // Log base 10
        .replace(/ln\(/g, 'Math.log(')     // Natural log
        .replace(/√x/g, 'Math.sqrt')       // Square root
        .replace(/1\/x/g, '1/')             // Handle 1/x as division
        .replace(/x²/g, '**2')             // Square
        .replace(/e\^x/g, 'Math.exp(')     // e^x
        .replace(/10\^x/g, 'Math.pow(10,') // 10^x
        .replace(/%/g, '/100');            // Handle percentage as division by 100
        

      // Use eval to compute the result
      result = eval(result);

      // Handle the case for e^x and 10^x which need closing parentheses
      if (input.includes('e^x')) {
        result = Math.exp(result);
      } else if (input.includes('10^x')) {
        const base = parseFloat(input.split('10^')[0]);
        result = Math.pow(10, base);
      }

      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };


  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('(')}>(</button>
          <button onClick={() => handleClick(')')}>)</button>
          <button onClick={() => handleClick('mc')}>mc</button>
          <button onClick={() => handleClick('m+')}>m+</button>
          <button onClick={() => handleClick('m-')}>m-</button>
          <button onClick={() => handleClick('mr')}>mr</button>
          
          {/* More buttons */}
          <button onClick={() => handleClick('1/x')}>1/x</button>
          <button onClick={() => handleClick('x²')}>x²</button>
          <button onClick={() => handleClick('√x')}>√x</button>
          <button onClick={() => handleClick('e^x')}>e^x</button>
          <button onClick={() => handleClick('10^x')}>10^x</button>
          
          {/* Scientific functions */}
          <button onClick={() => handleClick('sin(')}>sin</button>
          <button onClick={() => handleClick('cos(')}>cos</button>
          <button onClick={() => handleClick('tan(')}>tan</button>
          <button onClick={() => handleClick('log(')}>log</button>
          <button onClick={() => handleClick('ln(')}>ln</button>
          
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleClick('+/-')}>+/-</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>÷</button>

          {/* Number buttons */}
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>×</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>−</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('0')} className="zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
