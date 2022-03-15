import { useRouter } from 'next/router';
import React from 'react';

export default function ArticleListByCategory({ articles, category }) {
    const router = useRouter()
  return (
    <div>
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
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
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
