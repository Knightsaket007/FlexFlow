import React, { useEffect } from 'react'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import 'flexflow-react/style.css';
import Script from 'flexflow-react/Script';
function Colors() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  Script()
  return (
    <>
      <h2>text color</h2>
      <h6>Applicable classes</h6>
      <div className='code-container'><code>{`clr-prime \n clr-gray \n clr-orange \n clr-gray-dark \n clr-grapes \n clr-banana \n clr-berry \n clr-apple \n clr-stawberry \n clr-dark \n clr-white`}</code>
      </div>
      <p className='p-doc'>clr-[color_name]</p>
      <br />
      <h2>background color</h2>
      <h6>Applicable classes</h6>
      <div className='code-container'><code>{`bg-prime \n bg-gray \n bg-orange \n bg-gray-dark \n bg-grapes \n bg-banana \n bg-berry \n bg-apple \n bg-stawberry \n bg-dark \n bg-white`}</code>
      </div>
      <p className='p-doc'>bg-[color_name]</p>
      <br />
  
        <div className='colors-div bg-prime'>prime</div>
        <div className='colors-div bg-grapes'>grapes</div>
        <div className='colors-div bg-berry'>berry</div>
        <div className='colors-div bg-stawberry'>stawberry</div>
        <div className='colors-div bg-banana'>banana</div>
        <div className='colors-div bg-orange'>orange</div>
        <div className='colors-div bg-apple'>apple</div>
        <div className='colors-div bg-white ' style={{ color: "black" }}>white</div>
        <div className='colors-div bg-gray'>gray</div>
        <div className='colors-div bg-gray-dark'>gray-dark</div>
        <div className='colors-div bg-dark'>dark</div>


    </>
  )
}

export default Colors