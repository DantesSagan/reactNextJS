import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function NewsArticleList({ articles }) {
  const [category, setCategory] = useState('');
  const router = useRouter();

  const PickCategory = () => {
    router.push(`http://localhost:3000/news/${category}`);
  };
  return (
    <div>
      <h1>NewsArticleList</h1>
      <h2>Filter by category</h2>
      <input
        placeholder='type category that you want to filter'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button onClick={PickCategory}>Filter</button>
      <hr />
      {articles.map((articlesItem) => {
        return (
          <div key={articlesItem.id}>
            {articlesItem.id}, {articlesItem.title}, {articlesItem.category}
          </div>
        );
      })}
      <hr />
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

// getServerSideProps
// 1. getServerSideProps runs only on the server side
//     The function will never run client-side
//     The code you write inside getServerSideProps won't even be included in the JS bundle that is sent to the browser
// 2. You can write server-side code directly in getServerSideProps
//      Accessing the file system using the fs module or querying a database can be done inside getServerSideProps
//      You also don't have worry about including API keys in getServerSideProps as that won't make it to the browser
// 3. getServerSideProps is allowed only in a page and cannot be run from a regular component file
//     it is used only for pre-rendering and not client-side data fetching
// 4. getServerSideProps should return an object and object should contain a props key which is an object
// 5. getServerSideProps will run at request time
export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
