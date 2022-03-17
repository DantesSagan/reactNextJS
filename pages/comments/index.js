import React, { useState } from 'react';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [turnSwitch, setTurnSwitch] = useState(true);

  //   API GET REQUEST WITH LOAD/HIDE COMMENTS BUTTON
  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
    setTurnSwitch(!turnSwitch);
    console.log(data);
  };

  return (
    <section style={{ textAlign: 'center' }}>
      {/* In this case we check if current state of turnSwitch is true 
    so display Load comments if it false display comments with button Hide commets */}
      {turnSwitch ? (
        <div>
          <button onClick={fetchComments}>Load comments</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setTurnSwitch(!turnSwitch)}>
            Hide comments
          </button>
          {comments.map((comItem) => {
            return (
              <div key={comItem.id}>
                <h1>{comItem.id}</h1>
                <p>{comItem.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
