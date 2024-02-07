import React, { useRef } from "react";
import "./App.css";
import ExportAsImage from "./utils/ExportAsImage";
import ColorPicker from "./components/ColorPicker";

function App() {

  const box = [];

  for (let i = 1; i <= 5; i++) {
    box.push(
      <div className="each-box" id={i} key={i} style={{ background: "" }}>
        <ColorPicker />
      </div>
    );
  }

  const exportRef = useRef();

  return (
    <div className="parent">
      <h1 className="title">Palette Paradise</h1>
      <div
        className="box"
        ref={exportRef}
        style={{ color: "black" }}>
        {box}
      </div>
      <button className="download" onClick={() => ExportAsImage(exportRef.current, "palette")}>
        Download Palette
      </button>
    </div>
  );
}

export default App;