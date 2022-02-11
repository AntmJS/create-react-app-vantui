import React from 'react';
import { Button } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <View><Button type='primary'>Hello World!</Button></View>
        <div>上面的按钮的颜色已经通过全局主题重写覆盖了，参见src/style/index.less</div>
      </header>
    </div>
  );
}

export default App;
