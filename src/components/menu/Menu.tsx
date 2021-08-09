import * as React from 'react'
import classnames from 'classnames';
import { createContext, useState } from 'react';
import { MenuItemProps } from './MenuItem'
import './style.scss'

type onSelectType = (selectedIndex: string) => void

interface MenuProps {
  mode?: 'horizontal' | 'vertical',
  className?: string,
  defaultIndex?: string,
  style?: React.CSSProperties,
  onSelect?: onSelectType,
  defaultOpenedMenu?: string[]
}

interface IMenuContext {
  index: string,
  onSelect?: onSelectType,
  mode?: 'horizontal' | 'vertical',
  defaultOpenedMenu?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: React.FC<MenuProps> = ({ defaultOpenedMenu, mode = 'horizontal', className = '', defaultIndex = '0', style, onSelect, children }) => {
  const [activeIndex, setActiveIndex] = useState<string>(defaultIndex)

  const classes = classnames('viking-header', className, {
    'menu-horizontal': mode === 'horizontal',
    'menu-vertical': mode === 'vertical',
  })

  const handleItemClick = (index: string) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  }

  const passedContext: IMenuContext = {
    index: activeIndex,
    onSelect: handleItemClick,
    mode,
    defaultOpenedMenu
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childCom = child as React.FunctionComponentElement<MenuItemProps>
      if (childCom.type.displayName === 'MenuItem' || childCom.type.displayName === 'SubMenu') {
        return React.cloneElement(childCom, {
          index: index.toString()
        })
      } else {
        console.error('Menu组件仅希望MenuItem作为子组件')
      }
    })
  }

  return <ul className={classes} style={style}>
    <MenuContext.Provider value={passedContext}>
      {renderChildren()}
    </MenuContext.Provider>
  </ul>
}
