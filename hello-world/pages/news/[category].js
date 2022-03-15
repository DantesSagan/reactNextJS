import { useRouter } from 'next/router';
import React from 'react';

export default function ArticleListByCategory({ articles, category }) {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center' }}>
      <section
        style={{
          textAlign: 'center',
          justifyItems: 'center',
          display: 'inline-block',
          border: '5px solid red',
          borderRadius: '15px',
          padding: '15px',
        }}
      >
        ArticleListByCategory
        <h1>
          Showing new for category <i>{category}</i>
        </h1>
        {articles.map((articlesItem) => {
          return (
            <div key={articlesItem.id}>
              <h2>
                {articlesItem.id} - {articlesItem.title}
              </h2>
              <p>{articlesItem.description}</p>
            </div>
          );
        })}
        <button onClick={() => router.back()}>Back</button>
      </section>
    </div>
  );
}

//   33 SSR with Dynamic Parameters
//   In this case we are learned about how to implement dynamic parameters
//  with getServerSideProps which you can filter news by category for example by sports, politics, clothes and etc.
//  with using context parameter with destructure by category
export async function getServerSideProps(context) {
  // The 'context' parameter is an object containing following keys:
  // params, req, res, query
  const { params, req, res, query } = context;
  // In this case we get access to application cookies what displayed for additional data from server
  // and how to hold of them of server side props
  console.log(req.headers.cookie);
  // query string - that displayed query response what u've been called in URL input like {category:'sports'}
  // and for example like this with query response http://localhost:4000/news?subcategory=sports
  // query strings are quite common when you have to filter client side and ensure URL's can be shared to the others
  // would be amazon products URL's after you applied some filters

  console.log(query);
  res.setHeader('Set-Cookie', ['name=Dantes']);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
