import "./App.css";

function sumOfintegers(num01, num02) {
  /*
Write a JavaScript program to compute the sum of the two given integers.
If the two values are the same, then return triple their sum. 
*/

  if (num01 != num02) {
    return num01 + num02;
  } else return (num01 + num02) * 3;
}

function App() {
  return <h1>{sumOfintegers(12, 12)}</h1>;
}

export default App;
