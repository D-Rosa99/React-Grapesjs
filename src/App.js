import React, { useEffect, useState } from 'react'
import "grapesjs/dist/css/grapes.min.css"
import Grapesjs from "grapesjs"
import gjsPresetWebpage from "grapesjs-preset-webpage"
import "./App.css"

function App() {
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if (!editor) {
      const e = Grapesjs.init({
          container: `#gjs-container`,
          fromElement: true,
          plugins: [gjsPresetWebpage],
      })
      setEditor(e)
  }
  }, [editor])
  
  return (
    <div>
      <div id="gjs-container"/>
    </div>
  );
}

export default App;
