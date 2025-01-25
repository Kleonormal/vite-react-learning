import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }, []);

  return (
    <>
      <h1>Advice</h1>
      <p>{advice}</p>
      <button>刷新</button>
    </>
  );
}
export default UseEffect;
