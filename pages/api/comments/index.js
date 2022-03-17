import React from 'react';
import { comments } from '../../../data/comments';

export default function handler(req, res) {
  res.status(200).json(comments);
  return <div>handler</div>;
}
