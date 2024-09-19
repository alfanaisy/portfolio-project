'use client';
import React, { useState } from 'react';

const CopyEmail = ({ style }: { style: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const email = 'alfanaisy7@gmail.com';

  const handleClick = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div>
      <h1
        onClick={isCopied ? () => {} : handleClick}
        className={`${style} ${!isCopied && 'cursor-pointer'}`}
      >
        {isCopied ? 'Email Copied' : email}
      </h1>
    </div>
  );
};

export default CopyEmail;
