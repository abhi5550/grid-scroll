import React from 'react';
import ReactGridLayout from './ReactGridLayout'; // Make sure to adjust the path based on your folder structure
function App() {
  return (
    <div className="App">
       <h1>React Grid Layout</h1>
      <ReactGridLayout numberOfBoxes={30} />
    </div>
  );
}

export default App;
