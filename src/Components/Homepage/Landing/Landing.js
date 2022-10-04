import React, { useState } from 'react';
import device from './bowls.png';
import Textcluster from './Textcluster.js';
import Sprite2 from './Sprite2.js';
import Sprite3 from './Sprite3.js';
import './Landing.scss';
import bg2 from './web_no_console.png';


const Landing = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [sprite, setSprite] = React.useState(true);

  function titleoption() {
    return (
      <div id="title">
        <div>HelloWorld</div>
        <div id="eventdate">October 29th</div>
        <div id="subtitle">
          <div><a href="https://forms.gle/C5M55vn4q9tM1WqH7">Become a hacker</a></div>
          <div><a href="https://forms.gle/ZL98836nvb3jrJ6a9">Become a mentor</a></div>
        </div>
      </div>
  )};

  return (
    <div>
      <header style={{backgroundColor: "#aed1cf"}}>
        {sprite ? titleoption() : ""}
        <div style={{
          backgroundImage: `url(${device})`
        }} id="console" >
          <div id="landinggroup">
            {loading ? <></> : sprite ? <></> : <Textcluster />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Landing;
