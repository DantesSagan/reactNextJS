import React from 'react';
import { useRouter } from 'next/router';
export default function Doc() {
  const router = useRouter();

  // set initial value to array to ensure you code doesn't trow a runtime error
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature - {params[0]} and concept - {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature - {params[0]}</h1>;
  }
  // wrap in squared brackets file [...params].js to => [[...params]].js
  // and you can navigate to http://localhost:3000/docs without any error
  // with following jsx = "Docs home page"
  return <h1>Docs home page</h1>;
}
