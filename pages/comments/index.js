import React, { useState } from 'react';
import Link from 'next/link';

export default function CommentsPage() {
  const [comment, setComment] = useState('');
  const [text, setText] = useState('');
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

  // API POST REQUEST
  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  // API DELETE REQUEST COMMENT
  const deleteComment = async (commentId) => {
    await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    fetchComments();
  };

  // need to rework this PATCH method
  // API PATCH REQUEST COMMENT
  const patchComment = async (commentId) => {
    await fetch(`/api/comments/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    fetchComments();
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
          <br />
          <input
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={submitComment}>Submit Comment</button>
          {comments.map((comItem) => {
            return (
              <div key={comItem.id}>
                <Link href={`/comments/${comItem.id}`}>
                  <div style={{ cursor: 'pointer' }}>
                    <h1>{comItem.id}</h1>
                    <p>{comItem.text}</p> <br />
                  </div>
                </Link>
                <input
                  placeholder={comItem.text}
                  type='text'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => patchComment(comment.id)}>
                  Update text
                </button>
                <br />
                <button onClick={() => deleteComment(comment.id)}>
                  Delete comment
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
