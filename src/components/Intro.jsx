import React from 'react'
import { Tinos } from 'next/font/google'

const italic = Tinos({ subsets: ['latin'], weight: '400', style: 'italic' })

export default function Intro() {
    return (
        <div id='about' className="w-full my-44 text-base sm:text-lg">
            <div className='flex flex-col text-center space-y-6 w-11/12 sm:w-2/4 mx-auto'>
                <div className={`${italic.className} text-4xl sm:text-5xl`}>Next-level trip powered by nature and the human touch</div>

                <p>Our travel advisors have the tools, insights & connections to build your dream vacation. Get killer recommendations & perks, a seamless booking experience — and maybe a cool new friend along the way.</p>

                <div className="px-8 w-44 mx-auto cursor-pointer text-center transition-all uppercase py-1 border-2 border-black text-black hover:bg-black hover:text-white">
                    Book us
                </div>
            </div>
        </div>
    )
}
