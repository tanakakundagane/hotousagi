"use client"
import Image from 'next/image'
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import SecondHeading from './components/SecondHeading'
import ThirdHeading from './components/ThirdHeading'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRef } from 'react'

export default function Home() {

  const secondHeadingRef = useRef<HTMLDivElement>(null);
  const thirdHeadingRef = useRef<HTMLDivElement>(null);

  const handleScrollToSecond = () => {
    secondHeadingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToThird = () => {
    thirdHeadingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header onScrollToSecond={handleScrollToSecond} onScrollToThird={handleScrollToThird}/>
      <HeaderImage />
      <SecondHeading ref={secondHeadingRef} />
      <ThirdHeading ref={thirdHeadingRef}/>
      <Contact />
      <Footer/>
    </div>
  )
}
