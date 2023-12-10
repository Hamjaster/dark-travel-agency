import React from 'react'
import { Tinos } from 'next/font/google'
import { Roboto } from 'next/font/google'
import FadeUp from './Fade'

const normal = Roboto({ subsets: ['latin'], weight: '300' })
const italic = Tinos({ subsets: ['latin'], weight: '400', style: 'italic' })

export default function Testimonials() {
    return (
        <section class={` ${normal.className} my-12 bg-white dark:bg-gray-900`}>

            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <FadeUp
                    component={
                        <div class="mx-auto max-w-screen-sm">
                            <h2 class={` ${italic.className} mb-4 text-4xl sm:text-5xl`}>What our customers are saying about us</h2>
                            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">The depth of admiration and appreciation from our clients for the exceptional service and experiences we provide is truly heartwarming</p>
                        </div>
                    }
                />

                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <FadeUp
                        component={
                            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">We loved their customer support</h3>
                                    <p class="my-4">Dream come true! Wildlife expeditions and Kilimanjaro climb with them were remarkable. Their respect for nature and local communities made it special</p>

                                </blockquote>
                                <figcaption class="flex justify-center items-center space-x-3">
                                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Bonnie Green</div>

                                    </div>
                                </figcaption>
                            </figure>
                        }
                    />
                    <FadeUp
                        component={
                            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Exquisite Services, Unforgettable Journeys</h3>
                                    <p class="my-4">"Unparalleled experience! Wildlife safari and Kilimanjaro climb with their team were awe-inspiring. Their attention to detail and passion for nature made it unforgettable!.</p>

                                </blockquote>
                                <figcaption class="flex justify-center items-center space-x-3">
                                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Roberta Casas</div>

                                    </div>
                                </figcaption>
                            </figure>
                        }
                    />
                    <FadeUp
                        component={
                            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Travel Wizards Extraordinaire</h3>
                                    <p class="my-4">The travel agency's expertise is beyond compare. They not only crafted an itinerary but also shared insights that elevated my travel experience. Their extensive knowledge about destinations, coupled with a personalized touch, made every moment memorable</p>
                                </blockquote>
                                <figcaption class="flex justify-center items-center space-x-3">
                                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Jese Leos</div>

                                    </div>
                                </figcaption>
                            </figure>
                        }
                    />
                    <FadeUp
                        component={
                            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Grateful for Incredible Adventures</h3>
                                    <p class="my-4">Gratitude overwhelms me as I reflect on the exceptional service provided by this travel agency. They transformed my travel aspirations into reality with their unwavering support and meticulous planning.</p>
                                </blockquote>
                                <figcaption class="flex justify-center items-center space-x-3">
                                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Joseph McFall</div>

                                    </div>
                                </figcaption>
                            </figure>
                        }
                    />
                </div>

            </div>
        </section>
    )
}
