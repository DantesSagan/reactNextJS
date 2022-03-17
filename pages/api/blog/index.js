import React from 'react';

export default function handler(req, res) {
  res.status(200).json({ name: 'BLOG API route' });
  return <div>API</div>;
}
