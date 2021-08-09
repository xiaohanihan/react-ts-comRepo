import * as React from 'react'
import classnames from 'classnames'
import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import './icon.scss'

export interface IIconProps extends FontAwesomeIconProps {
  theme?: comTypes
}

export const Icon: React.FC<IIconProps> = ({
  theme,
  className,
  ...restProps
}) => {
  const classes = classnames(className, {
    [`icon-${theme}`]: theme,
  })
  return <FontAwesomeIcon {...restProps} className={classes} />
}
