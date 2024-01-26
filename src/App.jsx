import { useRef, useState } from 'react'
import './App.css'

function App() {
  const exportRef = useRef();

  return (
    <>
      <div className="parent">
        <div>
          <p>
            Test For Palette Picker & Exporter
          </p>
          <div ref={exportRef} className="colors">
            <h1>color: red</h1>
          </div>
        </div>
      </div>
      <button onClick={() => exportAsImage(exportRef.current, "test")}>
        Download Image
      </button>
    </>
  )
}

export default App
