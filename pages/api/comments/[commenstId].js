import { comments } from '../../../data/comments';

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log(comment);
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex((commentItem) => {
      commentItem.id === parseInt(commentId);
    });

    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  } else if (req.method === 'PATCH') {
    const textReq = req.body.text;
    comments.map((comItem) => {
      const newText = {
        id: comItem.id,
        text: textReq,
      };

      console.log(`changed`);
      comments.push(newText);
      res.status(200).json(newText);
    });
  }
}
