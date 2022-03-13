// import { useRouter } from 'next/router';
// import React from 'react';

// export default function Products({ products }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div>
//       <h2>
//         {products.id} - {products.title} - {products.price}{' '}
//       </h2>
//       <p>{products.description}</p>
//       <button onClick={() => router.back()}>Back</button>
//     </div>
//   );
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch(
//     `http://localhost:4000/products/${params.productsId}`
//   );
//   console.log(`Generating page for /posts/${params.productsId}`);

//   const data = await response.json();

//   if (!data.id) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products: data,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const response = await fetch(
//     'http://localhost:4000/products'
//   );
//   const data = await response.json();

//   // This is how to fecth list of paths for dymanic page
//   // and displayed all id of posts for get individual page of data
//   const paths = data.map((dataItem) => {
//     return {
//       params: {
//         productsId: `${dataItem.id}`,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }
