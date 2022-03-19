export default function handler(req, res) {
  // if we host just /api we get home to api route with json displayed "Home API route"
  //    We have specific route and naviage /api/one and we will see ["one"] on response
  //    And if /api/one/two/three and we will see ["one", "two", "three"] on response
  //    
  const params = req.query.params;
  console.log(params);
  res.status(200).json(params);
}
