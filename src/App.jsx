import React, { useRef } from "react";
import "./App.css";
import ExportAsImage from "./utils/ExportAsImage";

function App() {

  let code = `${11}`
  const box = [];


  for (let i = 1; i <= 5; i++) {
    box.push(
      <div className="box-ind" id={i} key={i} style={{ background: `#${code}` }}>
        test
      </div>,
    );
    code += 200
  }

  const exportRef = useRef();

  return (
    <div className="parent">
      <button onClick={() => ExportAsImage(exportRef.current, "palette")}>
        Download Image
      </button>
      <div className="box" ref={exportRef} style={{ backgroundColor: "transparent", padding: "40px", color: "white" }}>{box}</div>
    </div>
  );
}

export default App;
