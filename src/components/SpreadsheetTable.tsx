import React from 'react';

const rows = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for product',
    submitted: '05-11-2024',
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
  {
    id: 4,
    jobRequest: 'Design new company logo',
    submitted: '25-05-2024',
    status: 'Complete',
    submitter: { name: 'Meera Shah', avatar: 'M' },
    url: 'https://www.meerashah.art',
    assigned: { name: 'Priya Khanna', avatar: 'P' },
    priority: 'Medium',
    dueDate: '01-06-2024',
    value: '₹850,000',
  },
  {
    id: 5,
    jobRequest: 'Plan product launch event',
    submitted: '01-09-2024',
    status: 'In-process',
    submitter: { name: 'Amit Jain', avatar: 'A' },
    url: 'https://www.amitjain.in',
    assigned: { name: 'Devika Roy', avatar: 'D' },
    priority: 'High',
    dueDate: '15-09-2024',
    value: '₹4,700,000',
  },
];

const statusColors: Record<string, string> = {
  'In-process': 'bg-orange-200 text-orange-800',
  'Need to start': 'bg-blue-200 text-blue-800',
  'Complete': 'bg-green-200 text-green-800',
  'Blocked': 'bg-red-200 text-red-800',
};

const priorityColors: Record<string, string> = {
  'High': 'bg-red-100 text-red-700',
  'Medium': 'bg-yellow-100 text-yellow-700',
  'Low': 'bg-green-100 text-green-700',
};

export default function SpreadsheetTable() {
  return (
    <div className="overflow-auto border rounded shadow bg-white max-h-[500px]">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="sticky top-0 bg-gray-100 z-10 shadow-sm">
          <tr>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100 w-8">#</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Job Request</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Submitted</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Status</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Submitter</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">URL</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Assigned</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Priority</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Due Date</th>
            <th className="border p-2 text-left text-sm font-semibold bg-gray-100">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border p-2 text-sm text-gray-600">{row.id}</td>
              <td className="border p-2 text-sm">{row.jobRequest}</td>
              <td className="border p-2 text-sm">{row.submitted || '-'}</td>
              <td className="border p-2 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[row.status]}`}>
                  {row.status}
                </span>
              </td>
              <td className="border p-2 text-sm flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold">
                  {row.submitter.avatar}
                </div>
                {row.submitter.name}
              </td>
              <td className="border p-2 text-sm">
                <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  {row.url}
                </a>
              </td>
              <td className="border p-2 text-sm flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center text-xs font-bold">
                  {row.assigned.avatar}
                </div>
                {row.assigned.name}
              </td>
              <td className="border p-2 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[row.priority]}`}>
                  {row.priority}
                </span>
              </td>
              <td className="border p-2 text-sm">{row.dueDate}</td>
              <td className="border p-2 text-sm">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

