import React, { useState } from 'react';
import styles from '../styles/About.module.scss';

export default function About() {
  const [color, setColor] = useState(false);
  // In this case we are using specify styles for About page
  // Is that means if we are set to h2 element global styles in text color equl to orange
  // And this is be orange until we speficy it by
  // About.module.css file where this file be set text color to black
  // by using classNam equal to styles with .highlight object
  return (
    <div>
      <h2 className={styles.highlightscss}>About page</h2>
      {color ? (
        <div>
          <button className='btn btn-primary' onClick={() => setColor(!color)}>
            Primary or success
          </button>
        </div>
      ) : (
        <div>
          <button className='btn btn-success' onClick={() => setColor(!color)}>
            Primary or success
          </button>
        </div>
      )}
    </div>
  );
}
