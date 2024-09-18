'use client';
import React, { useState } from 'react';

const CopyEmail = () => {
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
      <h5 className="text-lg lg:text-2xl md:text-xl font-medium lg:mb-2 inline-block">
        Get in touch (click to copy)
      </h5>
      <h1
        onClick={isCopied ? () => {} : handleClick}
        className={`text-xl md:text-3xl lg:text-5xl font-bold ${
          !isCopied && 'cursor-pointer'
        }`}
      >
        {isCopied ? 'Email Copied' : email}
      </h1>
    </div>
  );
};

export default CopyEmail;
