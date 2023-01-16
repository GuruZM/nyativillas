import React from 'react'

export default function Footer() {
  return (
    <div className='py-36 mt-40 text-white text-center bg-black h-40'>
        <p>All Rights Reserved | Nyativillas  </p> 
        <div className='py-5'>
        <input type="text" className='rounded-full' placeholder='me@myemailid.com' />
        <button className='mx-2 rounded-full bg-yellow-400 py-2 px-4' >Subscribe</button>
        </div>
      
    </div>
  )
}
