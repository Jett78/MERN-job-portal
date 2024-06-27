import React, { useState } from 'react';
import Radiofield from './Radiofield'

const LocationFilter = ({handleChange}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
       <div>
        <h3 className='font-semibold py-4'>Location</h3>
           <div className='grid pl-4' >
           <Radiofield handleChange={handleChange} value=""  title="All" name="test"/>
           <Radiofield handleChange={handleChange} value="brussels" title="Brussels" name="test"/>
           <Radiofield handleChange={handleChange} value="london"  title="London" name="test"/>
           <Radiofield handleChange={handleChange} value="seattle"  title="Seattle" name="test"/>
           <Radiofield handleChange={handleChange} value="madrid"   title="Madrid" name="test"/>
           <Radiofield handleChange={handleChange} value="boston" title="Boston" name="test"/>
           </div>
       </div>
  )

}

export default LocationFilter