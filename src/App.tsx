import * as React from 'react'
import './App.scss'
import { Button, Alert, Menu, MenuItem, SubMenu, Icon } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

function App() {
  const [show ,setShow] = React.useState(false)
  
  return (
    <div>
      <Icon icon={faCoffee} theme="primary"></Icon>
      <Menu
        onSelect={(index) => alert(index)}
        mode="horizontal"
        defaultOpenedMenu={['2']}
      >
        <MenuItem>列表1</MenuItem>
        <MenuItem disabled>列表2</MenuItem>
        <SubMenu title="列表3">
          <MenuItem>子列表1</MenuItem>
          <MenuItem>子列表2</MenuItem>
        </SubMenu>
        <MenuItem>列表4</MenuItem>
      </Menu>
      <Button href="www.baidu.com">Hello</Button>
      <Alert type="success">发射成功</Alert>
      <Button onClick={() => {
        setShow(!show)
        alert(4)
      }}>显示/隐藏</Button>
      <CSSTransition in={show} timeout={300} classNames='alert' unmountOnExit>
        <div>w无；啊</div>
      </CSSTransition>
      <CSSTransition
        in={show}
        timeout={300}
        classNames="alert"
      >
        <div>111</div>
      </CSSTransition>
    </div>
  )
}

export default App
