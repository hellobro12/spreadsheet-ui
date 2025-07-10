import React from 'react';

export default function SpreadsheetTable() {
  const rows = 5;
  const cols = 4;

  return (
    <div className="overflow-auto border rounded shadow bg-white">
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          <tr>
            {Array.from({ length: cols }, (_, colIdx: number) => (
              <th key={colIdx} className="border p-2 bg-gray-100 text-left text-sm">
                Column {colIdx + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, rowIdx: number) => (
            <tr key={rowIdx}>
              {Array.from({ length: cols }, (_, colIdx: number) => (
                <td
                  key={colIdx}
                  className="border p-2 text-sm hover:bg-blue-50"
                  contentEditable
                >
                  Cell {rowIdx + 1},{colIdx + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
