import React, { useState } from 'react';

export default function logDataSessionPage() {
  const [text, setText] = useState('');
  const [logData, setLogData] = useState([]);
  const [turnSwitch, setTurnSwitch] = useState(true);

  //   API GET REQUEST WITH LOAD/HIDE logData BUTTON
  const fetchlogData = async () => {
    const response = await fetch('/api/text-session');
    const data = await response.json();
    setLogData(data);
    setTurnSwitch(!turnSwitch);
    console.log(data);
  };

  const formatTime = () => {
    const date = logData.session.expires;
    // const regeXp = /[^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z]/g;
    const regeXpTwo = /[^(?=\d{4}-\d{2}-\d{2})\s\d{2}:\d{2}:\d{2}\s\d{3}\s]/g;
    const changedDate = date.replace(regeXpTwo, ' ').split('').join('');
    console.log(changedDate);
    return (
      <div>
        <h2>Format auth time</h2>
        <h3>YY|MM|DD - HH|MM|SS - MM</h3>
        <ul style={{ display: 'inline-block' }}>
          <li style={{ float: 'left' }}>{changedDate}</li>
        </ul>
      </div>
    );
  };

  return (
    <section style={{ textAlign: 'center', minHeight: '100vh' }}>
      {/* In this case we check if current state of turnSwitch is true 
    so display Load logData if it false display logData with button Hide commets */}
      {turnSwitch ? (
        <div>
          <button onClick={fetchlogData}>Load logData</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setTurnSwitch(!turnSwitch)}>
            Hide logData
          </button>
          <br />
          <h1>Message - {logData.message}</h1>
          <h2>Email - {logData.session.user.email}</h2>
          <img
            style={{ borderRadius: '30px' }}
            src={logData.session.user.image}
            alt={logData.session.user.name}
          />
          <h3>Name - {logData.session.user.name}</h3>
          <p>Date of authenticated - {formatTime()}</p>
          <p>UserID - {logData.session.user.id}</p>
        </div>
      )}
    </section>
  );
}
