"use client"
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function FadeUp({ component, delay }) {
    const ref = useRef(null)
    const InView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (InView) controls.start('animate')
        // eslint-disable-next-line
    }, [InView])

    return (
        <motion.div className='overflow-hidden pb-3 h-full' ref={ref}
            initial='initial'
            animate={controls}
            variants={{
                initial: { y: 120, opacity: 0 },
                animate: {
                    y: 0, opacity: 1,
                    transition: {
                        delay: delay, duration: 0.8, type: 'spring'
                    }
                }
            }
            }
        >
            {component}
        </motion.div>
    )
}
