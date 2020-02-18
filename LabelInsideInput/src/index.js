import React from 'react'
import './index.css'
const InsideLabelInput = props => {
  return (
    <div className="hu-comp-label-inside-input">
      <input placeholder=" " {...props} />
      <span>{props.label || props.placeholder}</span>
    </div>
  )
}
export default InsideLabelInput
