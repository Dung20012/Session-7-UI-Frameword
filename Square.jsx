import React from 'react';

function Square() {
  return (
    <div className="w-[200px] h-[200px] bg-red-500"></div>
  );
}

export default Square;

// B1: chạy npm install tailwindcss @tailwindcss/vite
// B2:  tailwindcss() sau dấu ngoặc tròn file vite.config.js 
// và import tailwindcss from '@tailwindcss/vite'
// B3: @import "tailwindcss"; vào file index.css
