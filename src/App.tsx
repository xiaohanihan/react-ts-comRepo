import * as React from 'react';
import './App.scss';
import { Button } from './components'

function App () {
  return (
    <div className="App">
      <Button href='www.baidu.com'>Hello</Button>
      <Button btnType="default"></Button>
    </div>
  );
}

export default App;
