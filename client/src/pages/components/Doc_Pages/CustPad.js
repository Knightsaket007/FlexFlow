import React from 'react'

function CustPad() {
  return (
    <>
     <h2>Custum Padding</h2>
    <br/>
    <h6>margin positions</h6>
    <p className='p-doc'>{`top ->`}<code> t</code></p>
    <p className='p-doc'>{`right ->`}<code> r</code></p>
    <p className='p-doc'>{`bottom ->`}<code> b</code></p>
    <p className='p-doc'>{`left ->`}<code> l</code></p>
    <p className='p-doc'>{`top bottom ->`}<code> tb</code></p>
    <p className='p-doc'>{`left right ->`}<code> lr</code></p>
    
<br/>
<br/>
<h6>values are in px</h6>
<code>cust-pd-[position]-[value in integer]</code>
    </>
  )
}

export default CustPad