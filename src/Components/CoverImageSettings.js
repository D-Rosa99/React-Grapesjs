import React, { useState } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Tabs,
  Tab,
} from '@material-ui/core';

import './style/coverImageSettings.css';

const CoverImageSettings = ({ editor }) => {
  const [subtitleChecked, setSubtitleChecked] = useState(true);
  const [titleChecked, setTitleChecked] = useState(true);
  // const [element, setElement] = useState(null);
  const [value, setValue] = useState(0);

  const toggleChecked = (e, setChecked) => {
    const checked = e.target.checked;
    const getComponent = editor.getWrapper().find(`.lead-${e.target.name}`)[0];

    checked
      ? getComponent.set('style', { display: 'block' })
      : getComponent.set('style', { display: 'none' });

    setChecked(checked);
  };

  // const handleClick = () => {
  //   const element = myFrame.contentWindow.document.getElementsByClassName(
  //     'container-width'
  //   )[0];
  //   console.log('element ', element);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Cover Image</h2>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Settings" />
        <Tab label="Background" />
      </Tabs>

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
  );
};

export default CoverImageSettings;
