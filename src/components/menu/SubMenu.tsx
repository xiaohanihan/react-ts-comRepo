import * as React from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './MenuItem'
import { MenuContext } from './Menu'
import { Icon } from '../icon/Icon'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

export interface ISubMenuProps {
  index?: string
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  title: string
}

const { useContext, useState } = React

export const SubMenu: React.FC<ISubMenuProps> = ({
  index,
  className,
  disabled,
  style,
  children,
  title,
}) => {
  const menuContext = useContext(MenuContext)
  const originIsOpen =
    menuContext.defaultOpenedMenu && index && menuContext.mode === 'vertical'
      ? menuContext.defaultOpenedMenu.includes(index)
      : false
  const [isOpen, setIsOpen] = useState<boolean>(originIsOpen)
  const classes = classnames('subMenu vikingMenuItem', className, {
    isOpen: isOpen,
  })

  const renderChildren = () => {
    const childComponents = React.Children.map(children, (child, i) => {
      const childComponent =
        child as React.FunctionComponentElement<MenuItemProps>
      if (childComponent.type.displayName === 'MenuItem') {
        const cloneChild = React.cloneElement(childComponent, {
          index: `${index}-${i}`,
        })
        return cloneChild
      } else {
        console.error('SubMenu组件仅希望MenuItem作为子组件')
      }
    })
    return <ul>{childComponents}</ul>
  }

  const titleClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen)
    if (menuContext.onSelect && index) menuContext.onSelect(index)
  }

  const mouseEvent = (e: React.MouseEvent, toggle: boolean) => {
    setIsOpen(toggle)
  }

  const handleClick =
    menuContext.mode === 'horizontal'
      ? {}
      : {
          onClick: titleClick,
        }

  const handleMouseEvent =
    menuContext.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => mouseEvent(e, true),
          onMouseLeave: (e: React.MouseEvent) => mouseEvent(e, false),
        }
      : {}

  return (
    <li className={classes} style={style} {...handleMouseEvent}>
      <div onClick={titleClick} {...handleClick} className="subMenuTitle">
        {title}
        <Icon icon={faArrowUp} className="subMenuIcon"></Icon>
      </div>
      <CSSTransition in={isOpen} timeout={1000} classNames="showSubMenu" unmountOnExit>
        {renderChildren()}
      </CSSTransition>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
