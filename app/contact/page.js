import React from 'react'

export default function page() {
  return (
    <div className='conatc'>
        <h2 style={{marginTop: "25px", marginLeft: "25px"}}>Contact Page</h2>
        <div className='info-conatct'>
        <img src="/contact.avif" alt="person" width={500} />
        <div className='conatcts-inp'>
            <div className='inp'>
            <input type="text" placeholder='Name' />
            </div>
            <div className='inp'>
            <input type="text" placeholder='Phone' />
            </div>
            <button>Send Contact</button>

        </div>
        </div>
    </div>
  )
}
