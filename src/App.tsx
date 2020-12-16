import React from 'react';
import './styles/index.scss';
// import './App.css';

// import Hello from './Hello'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Color from './components/Color/Color'

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <div style={{margin: 10}}>
        <Button>Default</Button>
        <Button type={ ButtonType.Primary }>Primary</Button>
        <Button type={ ButtonType.Success }>Success</Button>
        <Button type={ ButtonType.Warning }>Warning</Button>
        <Button type={ ButtonType.Danger }>Danger</Button>
        <Button type={ ButtonType.Link }>Link</Button>
      </div>
    </div>
  );
}

export default App;
