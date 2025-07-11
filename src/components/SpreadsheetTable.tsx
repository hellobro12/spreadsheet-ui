import React, { useState, useEffect, useRef } from 'react';

export default function SpreadsheetTable() {
  const [headers, setHeaders] = useState(['Item', 'Q1', 'Q2', 'Q3', 'Total']);
  const [rowLabels, setRowLabels] = useState([
    'Design',
    'Marketing',
    'Development',
    'Customer Support',
    'Sales',
  ]);
  const [cellData, setCellData] = useState<string[][]>([]);

  const cols = headers.length;
  const cellRefs = useRef<Array<Array<HTMLTableCellElement | null>>>([]);

  useEffect(() => {
    setCellData((prevData) => {
      const newData = [...prevData];

      while (newData.length < rowLabels.length) {
        newData.push(new Array(cols - 2).fill(''));
      }

      while (newData.length > rowLabels.length) {
        newData.pop();
      }

      for (let i = 0; i < newData.length; i++) {
        while (newData[i].length < cols - 2) {
          newData[i].push('');
        }
        while (newData[i].length > cols - 2) {
          newData[i].pop();
        }
      }

      return newData;
    });
  }, [rowLabels.length, cols]);

  useEffect(() => {
    cellRefs.current = Array(rowLabels.length)
      .fill(null)
      .map(() => Array(cols - 2).fill(null));
  }, [rowLabels.length, cols]);

  const handleCellInput = (value: string, rowIdx: number, colIdx: number) => {
    const newData = [...cellData];
    newData[rowIdx][colIdx] = value;
    setCellData(newData);
  };

  const getRowTotal = (row: string[]) => {
    return row.reduce((sum, val) => {
      const num = parseFloat(val);
      return sum + (isNaN(num) ? 0 : num);
    }, 0);
  };

  return (
    <div className="overflow-auto border rounded shadow bg-white max-h-[500px]">
      {/* Buttons */}
      <div className="flex justify-between items-center p-2 gap-4">
        <button
          onClick={() => {
            const newLabel = `Q${headers.length - 3}`;
            const newHeaders = [...headers];
            newHeaders.splice(headers.length - 1, 0, newLabel);
            setHeaders(newHeaders);
          }}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
        >
          + Add Column
        </button>

        <button
          onClick={() => {
            setRowLabels([...rowLabels, `New Row ${rowLabels.length + 1}`]);
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
        >
          + Add Row
        </button>
      </div>

      {/* Table */}
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
          {rowLabels.map((label, rowIdx) => (
            <tr key={rowIdx}>
              {/* Editable Row Label */}
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const newLabel = (e.target as HTMLElement).innerText;
                  const updatedLabels = [...rowLabels];
                  updatedLabels[rowIdx] = newLabel;
                  setRowLabels(updatedLabels);
                }}
                className="border p-2 text-sm font-medium bg-gray-50 hover:bg-blue-50 focus:outline-none text-left"
              >
                {label}
              </td>

              {/* Editable Cells */}
              {cellData[rowIdx]?.map((value, colIdx) => (
                <td
                  key={colIdx}
                  ref={(el) => {
                    if (!cellRefs.current[rowIdx]) {
                      cellRefs.current[rowIdx] = [];
                    }
                    cellRefs.current[rowIdx][colIdx] = el;
                  }}
                  tabIndex={0}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) =>
                    handleCellInput(
                      (e.target as HTMLElement).innerText,
                      rowIdx,
                      colIdx
                    )
                  }
                  onKeyDown={(e) => {
                    const next = (r: number, c: number) => {
                      const ref = cellRefs.current[r]?.[c];
                      if (ref) ref.focus();
                    };

                    switch (e.key) {
                      case 'ArrowDown':
                        e.preventDefault();
                        next(rowIdx + 1, colIdx);
                        break;
                      case 'ArrowUp':
                        e.preventDefault();
                        next(rowIdx - 1, colIdx);
                        break;
                      case 'ArrowRight':
                        e.preventDefault();
                        next(rowIdx, colIdx + 1);
                        break;
                      case 'ArrowLeft':
                        e.preventDefault();
                        next(rowIdx, colIdx - 1);
                        break;
                      default:
                        break;
                    }
                  }}
                  onFocus={(e) => {
                    e.currentTarget.classList.add('ring-2', 'ring-blue-400');
                  }}
                  onBlur={(e) => {
                    e.currentTarget.classList.remove('ring-2', 'ring-blue-400');
                  }}
                  className="border p-2 text-sm hover:bg-blue-50 focus:outline-none"
                >
                  {value}
                </td>
              ))}

              {/* Auto Total */}
              <td className="border p-2 text-sm bg-gray-100 text-right font-semibold">
                {getRowTotal(cellData[rowIdx] || []).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
