import Image from 'next/image'
import Hero from '../components/Hero'
import Intro from '@/components/Intro'
import Destinations from '@/components/Destinations'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import Whyus from '@/components/Whyus'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Head>
        <title>Zanzibar tourist </title>
      </Head>
      <Hero />
      <Intro />
      <Destinations />
      <Whyus />
      <Testimonials />
      <Footer />
    </div>
  )
}
