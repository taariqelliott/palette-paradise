import React, { useRef } from "react";
import "./App.css";
import ExportAsImage from "./utils/ExportAsImage";
import ColorPicker from "./components/ColorPicker";

function App() {


  const box = [];

  for (let i = 1; i <= 5; i++) {
    box.push(
      <div className="box-ind" id={i} key={i} style={{ background: "" }}>
        <ColorPicker />
      </div>
    );
  }

  const exportRef = useRef();

  return (
    <div className="parent">
      <h1>Palette Paradise</h1>
      <div
        className="box"
        ref={exportRef}
        style={{ backgroundColor: "transparent", margin: 0, color: "black" }}>
        {box}
      </div>
      <button onClick={() => ExportAsImage(exportRef.current, "palette")}>
        Download Image
      </button>

    </div>
  );
}

export default App;