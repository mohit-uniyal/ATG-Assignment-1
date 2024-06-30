import End from '@/components/End'
import Feature1 from '@/components/Feature1'
import Feature2 from '@/components/Feature2'
import HomeScreen from '@/components/HomeScreen'
import SubFooter from '@/components/SubFooter'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function page() {
  return (
    <div>
      <HomeScreen />
      <Feature1 />
      <Feature2 />
      <Testimonials />
      <End />
      <SubFooter />
    </div>
  )
}

export default page