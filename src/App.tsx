import React from 'react';
import './styles/index.scss';
// import './App.css';

// import Hello from './Hello'
import Button, { ButtonSize, ButtonType } from './components/Button/Button'
import Color from './components/Color/Color'

function App() {
  return (
    <div className="App">
      <div style={{margin: 10}}>
        <Button>Default</Button>
        <Button type={ ButtonType.Primary }>Primary</Button>
        <Button type={ ButtonType.Success }>Success</Button>
        <Button type={ ButtonType.Warning }>Warning</Button>
        <Button type={ ButtonType.Danger }>Danger</Button>
      </div>
      {/* <Button disabled={true} type={ ButtonType.Primary } size={ ButtonSize.Normal }>点击我</Button>
      <Button disabled={true} type={ ButtonType.Link }>点击我</Button> */}
      {/* <Color></Color> */}
    </div>
  );
}

export default App;
