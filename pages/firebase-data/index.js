import React, { useState } from 'react';

export default function FirebaseData() {
  const [text, setText] = useState('');
  const [dataFirebase, setData] = useState([]);
  const [turnSwitch, setTurnSwitch] = useState(true);

  //   API GET REQUEST WITH LOAD/HIDE dataFirebase BUTTON
  const fetchdataFirebase = async () => {
    const response = await fetch('/api/firebase-api');
    const data = await response.json();
    setData(data);
    setTurnSwitch(!turnSwitch);
    console.log(data);
  };
  //   Short object
  const getData = dataFirebase.docId;

  //    Object function with nested index
  const Data = () =>
    Object.keys(getData).map((docItem) => {
      return (
        <div key={docItem.id}>
          <ul
            key={docItem.second}
            style={{
              display: 'inline-block',
            }}
          >
            <li style={{ float: 'left' }} key={docItem.third}>
              {getData[docItem].city} - {` `}
              {getData[docItem].country} - {` `}
              {getData[docItem].username} 
            </li>
          </ul>
        </div>
      );
    });

  return (
    <section style={{ textAlign: 'center', minHeight: '100vh' }}>
      {/* In this case we check if current state of turnSwitch is true 
    so display Load dataFirebase if it false display dataFirebase with button Hide commets */}
      {turnSwitch ? (
        <div>
          <button onClick={fetchdataFirebase}>Load dataFirebase</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setTurnSwitch(!turnSwitch)}>
            Hide dataFirebase
          </button>
          <Data />
        </div>
      )}
    </section>
  );
}
