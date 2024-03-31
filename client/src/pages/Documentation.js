import React, { useState } from 'react'
import "./Documentation.css"
import Navbar from "./components/Navbar"
import GettingStart from './components/Doc_Pages/GettingStart';
import Colors from './components/Doc_Pages/Colors';
import Buttons from './components/Doc_Pages/Buttons';
import Position from './components/Doc_Pages/Position';
import Flexbox from './components/Doc_Pages/Flexbox';
import Magatron from './components/Doc_Pages/Magatron';
import Center from './components/Doc_Pages/Center';
import FontWeight from './components/Doc_Pages/FontWeight';
import Size from './components/Doc_Pages/Size';
import Nav from './components/Doc_Pages/Nav';
import Screen_size from './components/Doc_Pages/Screen_size';
import CustMg from './components/Doc_Pages/CustMg';
import CustPad from './components/Doc_Pages/CustPad';
import CustSize from './components/Doc_Pages/CustSize';
import CustColor from './components/Doc_Pages/CustColor';
import CustPostionAlign from './components/Doc_Pages/CustPostionAlign';
import ZIndex from './components/Doc_Pages/ZIndex';
import CustBorderRad from './components/Doc_Pages/CustBorderRad';
import CustTextSize from './components/Doc_Pages/CustTextSize';
function Documentation() {
  const [currentPage, setCurrentPage] = useState('start'); // Initialize state with default page

  const handlePages = (pageType) => {
      setCurrentPage(pageType);
  }

  // Define a function to render the current page component based on the state
  const renderPage = () => {

      switch (currentPage) {
          case 'start':
              return <GettingStart/>;
          case 'color':
              return <Colors/>;
          case 'button':
              return <Buttons/>;
          case 'position':
              return <Position/>;
          case 'flexbox':
              return <Flexbox/>;
          case 'magatron':
              return <Magatron/>;
          case 'center':
              return <Center/>;
          case 'fontweight':
              return <FontWeight/>;
          case 'size':
              return <Size/>;
          case 'nav':
              return <Nav/>;
          case 'screen':
              return <Screen_size/>;
          case 'custMg':
              return <CustMg/>;
          case 'custPad':
              return <CustPad/>;
          case 'custsize':
              return <CustSize/>;
          case 'custcolor':
              return <CustColor/>;
          case 'custpostionAlign':
              return <CustPostionAlign/>;
          case 'zindex':
              return <ZIndex/>;
          case 'custBorderPad':
              return <CustBorderRad/>;
          case 'custTxtSize':
              return <CustTextSize/>;
          default:
              return null;
      }

  }
  return (
  <>
  <Navbar/>
  <div className='doc-main-container'>
   <div className='menu-container'>
    <div className='menu-fixed'>
      <ul>
        <li onClick={() => handlePages('start')}>Getting&ensp; Start</li>
        <h5>Non Custom:</h5>
        <li onClick={() => handlePages('color')}>Colors/Background-colors</li>
        <li onClick={() => handlePages('button')}>Buttons</li>
        <li onClick={() => handlePages('nav')}>Navbar</li>
        <li onClick={() => handlePages('position')}>Position</li>
        <li onClick={() => handlePages('flexbox')}>FlexBox</li>
        <li onClick={() => handlePages('magatron')}>Container</li>
        <li onClick={() => handlePages('center')}>Center</li>
        <li onClick={() => handlePages('fontweight')}>Font-Weight</li>
        <li onClick={() => handlePages('size')}>Size</li>
        <li onClick={() => handlePages('screen')}>Screen-Size</li>

        <h5>Custom:</h5>
        <li onClick={() => handlePages('custMg')}>Margin</li>
        <li onClick={() => handlePages('custPad')}>Padding</li>
        <li onClick={() => handlePages('custsize')}>Size</li>
        <li onClick={() => handlePages('custTxtSize')}>Text-Size</li>
        <li onClick={() => handlePages('custcolor')}>Color</li>
        <li onClick={() => handlePages('custpostionAlign')}>Alignment &ensp; (Position-Alignment)</li>
        <li onClick={() => handlePages('zindex')}>Z-Index</li>
        <li onClick={() => handlePages('custBorderPad')}>Border Radius</li>
        <li onClick={() => handlePages('size')}>Size</li>
      </ul>

    </div>
   </div>


   <div className='content-container'>
      {renderPage()}
   </div>

  </div>
  </>
  )
}

export default Documentation