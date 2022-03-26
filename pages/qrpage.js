import QRCode from 'qrcode.react';
import React, { useState } from 'react';

export default function QRPage() {
  const [code, setCode] = useState('');
  return (
    <div style={{ textAlign: 'center', minHeight: '100vh' }}>
      <h1>QR-Content|QR-Содержимое</h1>
      <input
      placeholder='Link&message&text&etc'
        style={{ padding: '15px', margin: '15px' }}
        onChange={(e) => setCode(e.target.value)}
      />{' '}
      <br />
      <QRCode value={code} size={400} height='150' width='150' />
    </div>
  );
}
