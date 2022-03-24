import React, { useState } from 'react';
import { comments } from '../../data/comments';
import { useRouter } from 'next/router';

export default function CommentIDPage({ commentsRender }) {
  const [text, setText] = useState('');

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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
  };
  return (
    <div style={{ textAlign: 'center', minHeight: '100vh' }}>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => window.history.forward()}>Further</button>
      <ul>
        <li>{commentsRender.id}</li>
      </ul>
      <ul>
        <li>{commentsRender.text}</li>
      </ul>{' '}
      <input
        placeholder={commentsRender.text}
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => patchComment(commentsRender.id)}>
        Update text
      </button>
      <br />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentsId } = params;

  const data = comments.find((commItem) => {
    return commItem.id === parseInt(commentsId);
  });

  return {
    props: {
      commentsRender: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = comments.map((dataItem) => {
    return {
      params: {
        commentsId: `${dataItem.id}`,
      },
    };
  });

  return {
    // paths: [{ params: { productsId: '1' } }],
    paths,
    fallback: true,
  };
}
