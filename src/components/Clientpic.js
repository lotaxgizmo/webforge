import React from 'react'
import towercoin from '../assets/towercoin.png'
import shrapnel from '../assets/shrapnel.png'
import solius from '../assets/solius.png'
import tokero from '../assets/tokero.jpg'
import atlas from '../assets/atlas.jpg'
import equalizer from '../assets/equalizer.jpg'
import funtico from '../assets/funtico.jpg'

function Clientpic() {
    return (
        <div>
            <div className='relative lg:!mx-[199px] mx-4 flex mb-20 '>
                <div className="blank lg:w-[15.8%]"></div>

 
                <div className=" lg:w-[84.2%]  3img flex flex-col  mt-14">

                    <div className="topimg  flex lg:flex-row flex-col">

                        <div className="img1 lg:w-[33.3%]">
                            <img src={funtico} alt="" />
                        </div>
                        <div className="img2 lg:w-[33.3%]">
                            <img src={towercoin} alt="" />
                        </div>
                        <div className="img3 lg:w-[33.3%]">
                            <img src={atlas} alt="" />
                        </div>
                    </div>
                    <div className="topimg  flex lg:flex-row flex-col">
                        <div className="img1 lg:w-[33.3%]">
                            <img src={solius} alt="" />
                        </div>
                        <div className="img2 lg:w-[33.3%]">
                            <img src={equalizer} alt="" />
                        </div>
                        <div className="img3 lg:w-[33.3%]">
                            <img src={shrapnel} alt="" />
                        </div>
                    </div>
                    <div className="topimg  flex lg:flex-row flex-col">
                        <div className="img1 lg:w-[33.3%]">
                            <img src={tokero} alt="" />
                        </div>
                        {/* <div className="img2 lg:w-[33.3%]">
                            <img src={equalizer} alt="" />
                        </div>
                        <div className="img3 lg:w-[33.3%]">
                            <img src={shrapnel} alt="" />
                        </div> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Clientpic