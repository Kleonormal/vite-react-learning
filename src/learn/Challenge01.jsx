import "./Challenge01.css";
import { useState } from "react";

function Challenge01() {
  const [circleColorPurple, setCircleColorPurple] = useState(false);
  const [textColor, setTextColor] = useState("");
  const [circleSize, setCircleSize] = useState(150);
  const [circlerRotate, setCirclerRotate] = useState(0);

  const circleStyle = {
    height: circleSize + "px",
    width: circleSize + "px",
    lineHeight: circleSize + "px",
    transform: `rotate(${circlerRotate}deg)`,
  };
  console.log(circleColorPurple);
  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          onChange={(event) => {
            setCircleColorPurple(event.target.checked);
          }}
        />
      </label>

      <label>
        text color
        <select
          onChange={(event) => {
            setTextColor(event.target.value);
          }}
        >
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(event) => {
            setCircleSize(event.target.value);
          }}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={circlerRotate}
          onChange={(event) => {
            setCirclerRotate(event.target.value);
          }}
        />
      </label>
      <div
        className={`circle ${textColor} ${circleColorPurple ? "purple" : ""}`}
        style={circleStyle}
      >
        Hi!
      </div>
    </main>
  );
}

export default Challenge01;
