import { comments } from '../../../data/comments';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
    // check if submitted method is POST
    // and if it is extract the body from the request object
    // You make to store you data in the database
    // or in temperary arrays like in this example
    // finally make sure to send back the response
  } else if (req.method === 'POST') {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
