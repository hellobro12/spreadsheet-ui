import React from 'react';

export default function SpreadsheetTable() {
  const headers = ['Item', 'Q1', 'Q2', 'Q3', 'Total'];
  const rowLabels = ['Design', 'Marketing', 'Development', 'Customer Support', 'Sales'];
  const rows = rowLabels.length;
  const cols = headers.length;

  return (
    <div className="overflow-auto border rounded shadow bg-white max-h-[400px]">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="sticky top-0 bg-gray-100 z-10 shadow-sm">
          <tr>
            {headers.map((header, index: number) => (
              <th
                key={index}
                className="border p-2 text-left text-sm font-medium bg-gray-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowLabels.map((label, rowIdx: number) => (
            <tr key={rowIdx}>
              <td className="border p-2 text-sm font-medium bg-gray-50">{label}</td>
              {Array.from({ length: cols - 1 }, (_, colIdx: number) => (
                <td
                  key={colIdx}
                  className="border p-2 text-sm hover:bg-blue-50 focus:outline-none"
                  contentEditable
                >
                  Cell {rowIdx + 1},{colIdx + 2}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
