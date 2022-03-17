import React from 'react';

export default function handler(req, res) {
  res.status(200).json({ name: 'Home API route' });
  return <div>API</div>;
}
