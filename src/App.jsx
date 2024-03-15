import { useRef, useState } from "react";
import "./App.css";
import ExportAsImage from "./utils/ExportAsImage";
import ColorPicker from "./components/ColorPicker";
import BottomNav from "./components/BottomNav";

function App() {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("")

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleImagePaste(e) {
    setUrl(e.target.value)
  }

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
      <div className="box" ref={exportRef} style={{ color: "black" }}>
        {box}
      </div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} style={{ width: "300px" }} />
      <input type="text" value={setUrl} onChange={handleImagePaste} />
      <img src={url} alt="" style={{ width: "25%" }} />
      <button
        className="download"
        onClick={() => ExportAsImage(exportRef.current, "palette")}>
        Download Palette
      </button>
      <BottomNav />
    </div>
  );
}

export default App;
