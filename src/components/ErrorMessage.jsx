import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="p-4 bg-red-100 text-red-800 rounded">
      {message}
    </div>
  );
}

export default ErrorMessage;
