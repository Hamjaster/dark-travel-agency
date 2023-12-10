"use client"
import React from 'react'
import Navbar from './Navbar'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Adventure', 'Journey', 'Trip', 'Tour'];


export default function Hero() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (

        <section class="">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- Navbar --> */}

            {/* <!-- Jumbotron --> */}
            <div style={{
                backgroundImage: 'url(./hero2.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }} class="relative h-[70vh] sm:h-screen overflow-hidden bg-cover bg-no-repeat">

                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">

                            <h1 class="mt-2 mb-8 text-4xl font-bold  md:text-5xl xl:text-6xl tracking-tight flex flex-row flex-wrap text-center justify-center space-x-4">
                                <div>
                                    Every
                                </div>
                                <span className={`italic`}>
                                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}
                                    </TextTransition>
                                </span>
                                <div>
                                    starts here
                                </div>
                            </h1>

                            <button type="button"
                                class="rounded border-2 border-neutral-50  px-[20px] sm:px-[46px]  pt-[10px] sm:pt-[14px]  pb-[8px] sm:pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                                data-te-ripple-init data-te-ripple-color="light">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Jumbotron --> */}
        </section>

    )
}
