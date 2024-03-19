import Image from 'next/image'
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import SecondHeading from './components/SecondHeading'

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderImage />
      <SecondHeading />
    </div>
  )
}
