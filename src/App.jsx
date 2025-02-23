import { useState } from 'react'
import './App.css'
import Header from './jsx/header.jsx'
import ImageContainer from './jsx/imageContainer.jsx'
import Landing from './jsx/landing.jsx'

import Calatrava from './images/calatrava.png'
import Elipse from './images/ellipse.png'
import KingSeiko from './images/kingseiko.png'
import Lady from './images/lady.png'
import Skydweller from './images/skydweller.png'

const App = () => {
  return (
    <div className='p-2 w-full flex flex-col h-full'>
      <Header/>
      <Landing/>
      <div className='w-full imgaes flex gap-3 p-2 shrink-0 overflow-x-auto overflow-y-hidden'>
        <ImageContainer imageUrl={Calatrava} desc1="Calatrava" desc2="Blue" price="P120000,000" />
        <ImageContainer imageUrl={Elipse} />
        <ImageContainer imageUrl={KingSeiko} />
        <ImageContainer imageUrl={Lady} />
        <ImageContainer imageUrl={Elipse} />
        <ImageContainer imageUrl={KingSeiko} />
        <ImageContainer imageUrl={Lady} />
        <ImageContainer imageUrl={Lady} />
        <ImageContainer imageUrl={Elipse} />
        <ImageContainer imageUrl={KingSeiko} />
        <ImageContainer imageUrl={Lady} />
        <ImageContainer imageUrl={Skydweller} />

      </div>

      <div className='w-full imgaes flex gap-3 p-2 shrink-0 overflow-x-auto overflow-y-hidden'>
        <ImageContainer imageUrl={Calatrava} desc1="Calatrava" desc2="Blue" price="P120000,000" />
        <ImageContainer imageUrl={Elipse} />
        <ImageContainer imageUrl={KingSeiko} />
        <ImageContainer imageUrl={Lady} />
        <ImageContainer imageUrl={Elipse} />
  
        <ImageContainer imageUrl={Skydweller} />

      </div>
      
  
    </div>
  )
}

export default App