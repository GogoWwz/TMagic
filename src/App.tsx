import React from 'react';
import './App.css';
// import Hello from './Hello'
import Button, { ButtonSize, ButtonType } from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <Button>点击我</Button>
      <Button disabled={true} type={ ButtonType.Primary } size={ ButtonSize.Normal }>点击我</Button>
      <Button disabled={true} type={ ButtonType.Link }>点击我</Button>
    </div>
  );
}

export default App;
