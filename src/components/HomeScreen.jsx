import React from 'react'
import Form from './Form'

function HomeScreen() {
  return (
    <div className='d-flex flex-column flex-xl-row gap-4 p-24-xl-100 justify-content-between'
        style={{
            backgroundColor: '#F7F5F9'
        }}
    >
        <div className="item-1 d-flex flex-column gap-5 w-xl-52">
            <h1 
                style={{
                    fontSize: '36px'
                }}
            >Explore your <span style={{color: '#0096C8'}}>hobby</span> or <span style={{color: 'var(--primary-color)'}}>passion</span></h1>
            <div className="description"
                style={{
                    fontSize: '14px',
                    color: ''
                }}
            >
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>
                <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <img src="/assets/homescreen-image.png" alt="" className='d-none d-xl-inline' style={{width: '100%'}}/>
        </div>
        <div className="item-2 w-xl-30"
        >
            <Form />
        </div>
        <img src="/assets/homescreen-image.png" alt="" className='d-xl-none d-inline' style={{width: '100%'}}/>
    </div>
  )
}

export default HomeScreen