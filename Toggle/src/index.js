import React from 'react'
import './index.css'

export default props => {
  return (
    <label className="hu-comp-toggle-label">
      <span className="hu-comp-toggle-span">
        <input type="checkbox" className="hu-comp-toggle-check" {...props} />
      </span>
      {props.label || ''}
    </label>
  )
}
