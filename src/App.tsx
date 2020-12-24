import React from 'react';
import './styles/index.scss';
// import './App.css';

// import Hello from './Hello'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Icon from './components/Icon/icon'
import { ReactComponent as Close } from './assets/icons/close.svg'
import Color from './components/Color/Color'
import svg from './close.svg'
import Menu, { MenuItem } from './components/Menu/menu'

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
      <div>
        <Icon size="42" icon="arrow-down" />
          {/* @ts-ignore */}
          <svg viewBox={svg.viewBox} width="48" height="48" fill="#ff0000">
            {/* @ts-ignore */}
            <use xlinkHref={"#" + svg.id} />
          </svg>
      </div>
      <div>
        <Menu className="custom" mode="horizontal">
          <MenuItem className="custom" disabled></MenuItem>
        </Menu>
      </div>
    </div>
  );
}

Menu.defaultProps = {
  defaultSeletedKey: 0,
  mode: "horizontal"
}

export default App;
