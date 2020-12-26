import React from 'react';
import './styles/index.scss';
// import './App.css';

// import Hello from './Hello'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Icon from './components/Icon/icon'
import { ReactComponent as Close } from './assets/icons/close.svg'
import Color from './components/Color/Color'
import svg from './close.svg'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

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
        <Menu onSelect={ index => console.log(index) }>
          <MenuItem className="custom" index={0}>item1</MenuItem>
          <MenuItem className="custom" index={1}>item2</MenuItem>
          <MenuItem className="custom" index={2} disabled>item3</MenuItem>
        </Menu>
        <div style={{ width: 300 }}>
          <Menu className="custom" mode="vertical" onSelect={ index => console.log(index) }>
            <MenuItem className="custom" index={0}>item1</MenuItem>
            <MenuItem className="custom" index={1}>item2</MenuItem>
            <MenuItem className="custom" index={2} disabled>item3</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

Menu.defaultProps = {
  defaultSeletedKey: 0,
  mode: "horizontal"
}

export default App;
