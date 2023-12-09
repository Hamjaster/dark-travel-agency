import React from 'react'
import { BiCustomize } from "react-icons/bi";
import { CiBoxList, CiMedal, CiStar } from "react-icons/ci";
import { Tinos } from 'next/font/google'

const italic = Tinos({ subsets: ['latin'], weight: '400', style: 'italic' })
export default function Whyus() {
    return (
        <div id='whyus' className='flex flex-col space-y-4 my-12 text-lg'>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(./why.jpg)`,
                backgroundPosition: '',
                backgroundSize: 'cover'
            }} className={`banner w-11/12 mx-auto text-white flex items-center justify-center ${italic.className} text-4xl sm:text-5xl h-56 sm:h-80`}>
                Why We're Different
            </div>

            <div className="w-full md:w-10/12 mx-auto flex flex-col sm:flex-row justify-evenly">

                <div className="py-10  px-3 sm:py-20  sm:px-7 text-center flex flex-col items-center justify-between space-y-3 ">
                    <div className="icon text-7xl ">
                        <CiBoxList />
                    </div>
                    <div>Customized travel planning for you</div>
                </div>

                <div className="py-10  px-3 sm:py-20  sm:px-7 text-center flex flex-col items-center justify-between space-y-3 ">
                    <div className="icon text-7xl ">
                        <CiMedal />
                    </div>
                    <div>Expert advice from people who've actually been there

                    </div>
                </div>

                <div className="py-10 px-3  sm:py-20 sm:px-7  text-center flex flex-col items-center justify-between space-y-3 ">
                    <div className="icon text-7xl ">
                        <CiStar />
                    </div>
                    <div>Free upgrades, spa credits and more — we got you</div>
                </div>



            </div>

        </div>
    )
}
