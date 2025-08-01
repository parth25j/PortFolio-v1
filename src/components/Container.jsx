import React from 'react'
import HeroSection from './hero/HeroSection'

const Container = ({children}) => {
  return (
    <div className=' !pt-6 m-auto! mt-6! h-full sm:w-[80%]'>
       {children}
    </div>
  )
}

export default Container