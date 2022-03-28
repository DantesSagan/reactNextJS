import React, { useState } from 'react';

export default function TextSessionPage() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);
  const [turnSwitch, setTurnSwitch] = useState(true);

  //   API GET REQUEST WITH LOAD/HIDE textS BUTTON
  const fetchTexts = async () => {
    const response = await fetch('/api/text-session');
    const data = await response.json();
    setTexts(data);
    setTurnSwitch(!turnSwitch);
    console.log(data);
  };

  return (
    <section style={{ textAlign: 'center', minHeight: '100vh' }}>
      {/* In this case we check if current state of turnSwitch is true 
    so display Load texts if it false display texts with button Hide commets */}
      {turnSwitch ? (
        <div>
          <button onClick={fetchTexts}>Load texts</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setTurnSwitch(!turnSwitch)}>Hide texts</button>
          <br />
          <h1>{texts.message}</h1>
          <h2>{texts.session.user.email}</h2>
          <img src={texts.session.user.image} alt={texts.session.user.name} />
          <h3>{texts.session.user.name}</h3>
          <p>{texts.session.expires}</p>
        </div>
      )}
    </section>
  );
}
