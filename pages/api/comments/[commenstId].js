import { comments } from '../../../data/comments';

export default function handler(req, res, err) {
  const { commentId } = req.query;

  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log(comment);
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex((commentItem) => {
      commentItem.id === parseInt(commentId);
    });

    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
  // need to rework this PATCH method
  else if (req.method === 'PATCH') {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const textReq = req.body.text;
    const newText = {
      text: textReq,
    };
    console.log(`changed`);
    comments.unshift(newText);
    res.status(200).json(newText);
  }
}
