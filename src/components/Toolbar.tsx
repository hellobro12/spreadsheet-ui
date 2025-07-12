import React from 'react';

export default function Toolbar() {
  // Handler to log button clicks
  const handleClick = (name: string) => {
    console.log(`${name} button clicked`);
  };

  return (
    <div className="bg-white border-b px-4 py-2 flex gap-3">
      <button
        onClick={() => handleClick('Tool bar')}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        Tool bar ▼
      </button>

      <button
        onClick={() => handleClick('Hide fields')}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        Hide fields
      </button>

      <button
        onClick={() => handleClick('Sort')}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        Sort
      </button>

      <button
        onClick={() => handleClick('Filter')}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        Filter
      </button>
    </div>
  );
}
