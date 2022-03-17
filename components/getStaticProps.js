// export async function getStaticPropsID(context) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   );
//   const data = await response.json();
//   console.log(data);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPropsIndex() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return {
//     props: {
//       posts: data.slice(0, 10),
//     },
//   };
// }

