import React from 'react'
import classNames from 'classnames'
import './style.scss'

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
type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

export const Button: React.FC<ButtonProps> = (prop: ButtonProps) => {
  const { btnType, size, children,href,...rest } = prop
  const className = classNames('btn')

  if (btnType === 'link' && href) {
    return <a href={href}>{children}</a>
  } else {
    return <div className={className} {...rest}>{children}</div>
  }
}

// export default Button