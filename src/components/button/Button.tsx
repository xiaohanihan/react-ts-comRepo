import React from 'react'
import classNames from 'classnames'
import './style.scss'

// export enum ButtonTypes {
//   default = 'default',
//   primary = 'primary',
//   danger = 'danger',
//   warning = 'warning',
//   link = 'link',
// }

type buttonTypes = 'default' | 'primary' | 'danger' | 'warning' | 'link' | undefined

enum ButtonSize {
  large = 'large',
  small = 'small'
}

interface BaseButtonProps {
  btnType: buttonTypes,
  size: string,
  children: React.ReactNode,
  href: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type NativeAnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<ButtonProps> = (prop: ButtonProps) => {
  const { btnType, size, children,href } = prop
  const className = classNames('btn')

  if (btnType === 'link' && href) {
    return <a href={href}>{children}</a>
  } else {
    return <div className={className}>{children}</div>
  }
}

export default Button