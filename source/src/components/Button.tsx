import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`font-poppins font-medium text-[14px]
     text-primary py-4 px-6 bg-blue-gradient outline-none ${styles}`}>
      Get started
    </button>
  )
}

export default Button
