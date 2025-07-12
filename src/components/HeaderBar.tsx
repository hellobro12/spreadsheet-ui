import React from 'react';

export default function HeaderBar() {
  return (
    <div className="bg-white border-b shadow px-4 py-2">
      {/* Top Section */}
      <div className="flex items-center justify-between text-sm mb-1">
        {/* Left: Title & Path */}
        <div>
          <h1 className="text-lg font-semibold">Intern Design Assignment</h1>
          <p className="text-gray-500">Workspace &gt; Folder 2 &gt; Spreadsheet 3</p>
        </div>

        {/* Right: Buttons + User Info */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Import</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Export</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Share</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white hover:bg-blue-700">
            New Action
          </button>
          <span className="text-sm text-gray-600">68%</span>
          {/* Removed FaUserCircle */}
        </div>
      </div>

     
    </div>
  );
}
