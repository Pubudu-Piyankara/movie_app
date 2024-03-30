import React from 'react';

const TextButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
    className="text-blue-400" >
      {text}
    </button>
  );
};

export default TextButton;
