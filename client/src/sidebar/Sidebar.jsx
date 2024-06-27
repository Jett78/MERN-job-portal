import React from 'react'
import LocationFilter from './LocationFilter'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <main>
        <h2 className='font-semibold text-xl'>Filters</h2>
        <LocationFilter handleChange={handleChange}/>
    </main>
  )
}

export default Sidebar