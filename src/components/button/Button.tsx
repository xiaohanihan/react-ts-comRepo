import React from 'react'
import classNames from 'classnames'
import './style.scss'

enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  danger = 'danger',
  warning = 'warning',
  link = 'link',
}

enum ButtonSize {
  large = 'large',
  small = 'small'
}

interface ButtonProps {
  type: string,
  size: string,
  children: React.ReactNode,
  href: string
}

const Button: React.FC<ButtonProps> = (prop: ButtonProps) => {
  const { type, size, children,href } = prop
  const classs = classNames('btn')

  if (type === ButtonTypes.link && href) {
    return <a href={href}>{children}</a>
  } else {
    return <div>{children}</div>
  }
}

export default Button