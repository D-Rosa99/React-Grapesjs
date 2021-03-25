import React, { useEffect, useState } from 'react';
import Grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import CoverImageSettings from './Components/CoverImageSettings';

import 'grapesjs/dist/css/grapes.min.css';
import './App.css';

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      const initEditor = Grapesjs.init({
        container: `#gjs-container`,
        fromElement: true,
        plugins: [gjsPresetWebpage],
      });
      setEditor(initEditor);
    }
  }, [editor]);

  return (
    <div>
      <CoverImageSettings editor={editor} />
      <div id="gjs-container" />
    </div>
  );
}

export default App;
