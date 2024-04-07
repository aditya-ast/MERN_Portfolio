import React from 'react'

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      Click me!
    </button>
  )
}

export default ToggleButton