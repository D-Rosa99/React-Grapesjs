import React, { useEffect, useState } from 'react';
import Grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import 'grapesjs/dist/css/grapes.min.css';
import './App.css';

function App() {
  const [editor, setEditor] = useState(null);
  const [subtitleChecked, setSubtitleChecked] = useState(true);
  const [titleChecked, setTitleChecked] = useState(true);

  useEffect(() => {
    if (!editor) {
      const e = Grapesjs.init({
        container: `#gjs-container`,
        fromElement: true,
        plugins: [gjsPresetWebpage],
      });
      setEditor(e);
    }
  }, [editor]);

  const toggleChecked = (e, setChecked) => {
    const checked = e.target.checked;
    const getComponent = editor.getWrapper().find(`.lead-${e.target.name}`)[0];

    checked
      ? getComponent.set('style', { display: 'block' })
      : getComponent.set('style', { display: 'none' });

    setChecked(checked);
  };

  return (
    <div>
      <aside className="sidebar">
        <FormGroup className="sidebar-formgroup">
          <FormControlLabel
            control={
              <Switch
                name="title"
                checked={titleChecked}
                onChange={(e) => toggleChecked(e, setTitleChecked)}
              />
            }
            label="Title"
          />
          <FormControlLabel
            control={
              <Switch
                name="subtitle"
                checked={subtitleChecked}
                onChange={(e) => toggleChecked(e, setSubtitleChecked)}
              />
            }
            label="Subtitle"
          />
        </FormGroup>
      </aside>
      <div id="gjs-container" />
    </div>
  );
}

export default App;
