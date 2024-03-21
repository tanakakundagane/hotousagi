import Image from 'next/image'
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import SecondHeading from './components/SecondHeading'
import ThirdHeading from './components/ThirdHeading'

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderImage />
      <SecondHeading />
      <ThirdHeading/>
    </div>
  )
}
