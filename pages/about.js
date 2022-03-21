import React, { useState } from 'react';

export default function About() {
  const [color, setColor] = useState(false);
  return (
    <div>
      <h2>About page</h2>
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
