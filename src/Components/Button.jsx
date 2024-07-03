import React from 'react'

const Button = ({ text, className, onClick } ) => {
  return (
    <button className={` px-6 py-1 text-xl text-white border-2 border-slate-400 font-semibold ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button;