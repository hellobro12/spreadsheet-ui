import React from 'react';
import HeaderBar from './components/HeaderBar';
import Toolbar from './components/Toolbar';
import SpreadsheetTable from './components/SpreadsheetTable';
#to load spreadsheet
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBar />
      <Toolbar />
      <div className="p-4">
        <SpreadsheetTable />
      </div>
    </div>
  );
}

export default App;
