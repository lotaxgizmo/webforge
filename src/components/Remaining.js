import React from 'react'
import Services from './Services'
import Standout from './Standout'
import Innovative from './Innovative'
import Expertise from './Expertise'
import Strategic from './Strategic'
import Customised from './Customised'
import Transparent from './Transparent'
import Whoweare from './Whoweare'
import Weare from './Weare'
import Someclients from './Someclients'
import Clientpic from './Clientpic'
import Letstalk from './Letstalk'
import Copyright from './Copyright'

function Remaining() {
  return (
    <div className='relative w-full h-screen '>
      <Services/>
      <Standout />
      {/* <div className=" w-full line absolute h-full ">ddd</div> */}
      <Innovative />
      <Expertise />
      <Strategic />
      <Customised />
      <Transparent />
      <Whoweare />
      <Weare />
      <Someclients />
      <Clientpic />
      <Letstalk/>
      <Copyright/>

    </div>
  )
}

export default Remaining