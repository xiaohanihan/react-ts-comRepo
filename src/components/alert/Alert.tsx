import * as React from 'react';
import './style.scss'
import classnames from 'classnames'

interface AlertProps {
  type?: comTypes;
}

export const Alert: React.FC<AlertProps> = ({children,type}) => {

  const className = classnames(['alertContainer', {
    'success': type === 'success'
  }])

  return <div className={className}>{children}</div>
}