import React from 'react'
import valuesData from '@data/values'
import { Icon } from '@iconify/react';

const ValuesSection = () => {
   

  return (
    <section className='values-section md:py-12 py-8'>
        {valuesData.map((value , i) => (
            <div key={i}>
                <Icon className='icon' icon={`hugeicons:${value.icon}`} width="48" height="48" />
                <div>
                    <p>{value.title}</p>
                    <span>{value.sub}</span>
                </div>
            </div>
        ))}
    </section>
  )
}

export default ValuesSection