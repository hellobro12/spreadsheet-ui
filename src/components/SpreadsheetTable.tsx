import React from 'react';

export default function SpreadsheetTable() {
  const headers = [
    '#',
    'Job Request',
    'Submitted',
    'Status',
    'Submitter',
    'URL',
    'Assigned',
    'Priority',
    'Due Date',
    'Est. Value',
  ];

  const rows = [
    {
      id: 1,
      jobRequest: 'Launch social media campaign for product',
      submitted: '',
      status: 'In-process',
      submitter: { name: 'Aisha Patel', avatar: 'A' },
      url: 'https://www.aishapatel.com',
      assigned: { name: 'Sophie Choudhury', avatar: 'S' },
      priority: 'Medium',
      dueDate: '20-11-2024',
      value: '₹6,200,000',
    },
    {
      id: 2,
      jobRequest: 'Update onboarding documentation',
      submitted: '12-07-2024',
      status: 'Need to start',
      submitter: { name: 'Rajiv Mehra', avatar: 'R' },
      url: 'https://www.rajivm.dev',
      assigned: { name: 'Anjali Das', avatar: 'A' },
      priority: 'High',
      dueDate: '24-07-2024',
      value: '₹3,500,000',
    },
    {
      id: 3,
      jobRequest: 'Fix payment gateway bugs',
      submitted: '05-06-2024',
      status: 'Blocked',
      submitter: { name: 'Tanvi Rao', avatar: 'T' },
      url: 'https://www.tanvirao.io',
      assigned: { name: 'Nikhil Arora', avatar: 'N' },
      priority: 'Low',
      dueDate: '12-08-2024',
      value: '₹1,200,000',
    },
  ];

  return (
    <div className="overflow-auto border rounded shadow bg-white max-h-[500px]">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="sticky top-0 bg-gray-100 z-10 shadow-sm">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase bg-gray-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {/* Row Index */}
              <td className="border px-3 py-2 text-sm">{row.id}</td>

              {/* Job Request */}
              <td className="border px-3 py-2 text-sm" contentEditable>
                {row.jobRequest}
              </td>

              {/* Submitted */}
              <td className="border px-3 py-2 text-sm text-gray-600">
                {row.submitted || '—'}
              </td>

              {/* Status */}
              <td className="border px-3 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    row.status === 'In-process'
                      ? 'bg-orange-100 text-orange-700'
                      : row.status === 'Need to start'
                      ? 'bg-blue-100 text-blue-700'
                      : row.status === 'Complete'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {row.status}
                </span>
              </td>

              {/* Submitter */}
              <td className="border px-3 py-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                  {row.submitter.avatar}
                </div>
                <span className="text-sm">{row.submitter.name}</span>
              </td>

              {/* URL */}
              <td className="border px-3 py-2 text-sm text-blue-600 underline">
                <a href={row.url} target="_blank" rel="noreferrer">
                  {row.url.replace(/^https?:\/\//, '')}
                </a>
              </td>

              {/* Assigned */}
              <td className="border px-3 py-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">
                  {row.assigned.avatar}
                </div>
                <span className="text-sm">{row.assigned.name}</span>
              </td>

              {/* Priority */}
              <td className="border px-3 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    row.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : row.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {row.priority}
                </span>
              </td>

              {/* Due Date */}
              <td className="border px-3 py-2 text-sm" contentEditable>
                {row.dueDate}
              </td>

              {/* Est. Value */}
              <td className="border px-3 py-2 text-sm font-medium">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
