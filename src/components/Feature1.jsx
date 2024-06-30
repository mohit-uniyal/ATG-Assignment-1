import React from 'react'

function Feature1() {

    const items=[
        {
            logo: <i class="bi bi-people-fill" />,
            title: 'People',
            color: '#8064A2',
            description: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            button: 'Connect'
        },
        {
            logo: <i class="bi bi-geo-alt-fill" />,
            color: '#77933C',
            title: 'Place',
            description: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
            button: 'Meet Up'
        },
        {
            logo: <i class="bi bi-bag-dash-fill" />,
            color: '#C0504D',
            title: 'Product',
            description: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
            button: 'Get it'
        },
        {
            logo: <i class="bi bi-calendar-check-fill" />,
            color: '#0096C8',
            title: 'Program',
            description: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
            button: 'Attend'
        },
    ];

  return (
    <div className='t-p-32-xl-100 container'>
        <div className="row g-2">
        {
            items.map((item, index)=>{
                return (
                    <div key={index} className='col-12 col-xl-6 rounded' style={{
                        border: '1px solid #CED4DA',
                        padding: '20px'
                    }}>
                        <div style={{fontWeight: '600', fontSize: '24px'}}><span style={{color: item.color}}>{item.logo}</span> &nbsp; {item.title}</div>
                        <br />
                        <p style={{fontSize: '18px'}}>{item.description}</p>
                        <button className='rounded-2' style={{
                            padding: '5px',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--primary-color)',
                            color: 'var(--primary-color)'
                        }}>
                            {item.button}
                        </button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Feature1