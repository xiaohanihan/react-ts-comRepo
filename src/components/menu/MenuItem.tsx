import classnames from 'classnames';
import { useContext } from 'react'
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index?: string,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties
}

export const MenuItem: React.FC<MenuItemProps> = ({ index, disabled, className, style, children }) => {
  const menuContext = useContext(MenuContext);

  const classes = classnames('vikingMenuItem', className, {
    'isDisabled': disabled,
    'isActive': index === menuContext.index
  })

  const onLiClick = () => {
    if (!disabled && typeof index === 'string' && menuContext.onSelect) {
      menuContext.onSelect(index);
    }
  }

  return <li className={classes} style={style} onClick={onLiClick}>{children}</li>
}

MenuItem.displayName = 'MenuItem'
