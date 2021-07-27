import * as React from 'react'
import useMouseUpdate from '../hooks/useMouseUpdate'

const MouseShow: React.FC = () => {
  const position = useMouseUpdate();

  return <div>
    x: {position.x}  y: {position.y}
  </div>
}

export default MouseShow