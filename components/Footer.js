import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-blue-950 text-white px-4 flex items-center justify-center h-16'>
       <p className='text-center'>Copyright &copy; {currentYear}  Get me A Chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer
