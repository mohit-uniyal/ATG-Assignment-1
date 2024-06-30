import React from 'react'

function End() {
  return (
    <div className='d-flex flex-column gap-5 align-items-start t-p-32-xl-100' style={{
      backgroundColor: '#F7FDFF'
    }}>
        <h1>Your <span style={{color: 'var(--primary-color)'}}>Hobby</span>, Your <span style={{color: '#0096C8'}}>Community</span>...</h1>
        <button className='rounded' style={{
          padding: '7px',
          border: 'none',
          backgroundColor: 'var(--primary-color)',
          color: 'white'
        }}>Get started</button>
        <img src="/assets/last-image.png" alt="" className='w-100' />
    </div>
  )
}

export default End