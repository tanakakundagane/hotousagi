"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  onScrollToSecond: () => void;
  onScrollToThird: () => void;
  showWorkInfo?: boolean;
}


// const Header = ({ onButtonClick }) => {

  const Header: React.FC<HeaderProps> = ({onScrollToSecond, onScrollToThird, showWorkInfo = true}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='hidden md:flex justify-between w-9/12 m-auto mt-5  text-sm lg:text-lg '>
        <Link href="/" className='cursor-pointer text-center'>
          <p>就労継続支援A型事業所</p>
          <p>ホトうさぎ岐阜</p>
        </Link>

        <div className='flex [&_p]:mr-5 xl:mr-10'>

          {showWorkInfo && (
            <button onClick={onScrollToSecond}>
              <p>就労継続支援</p>
              <p>A型について</p>
            </button>
          )}

          {showWorkInfo && (
            <button onClick={onScrollToThird}>
              <p>作業内容</p>
              <p>work</p>
            </button>
          )}

          <div>
            <Link href="/information">
                <p>会社案内</p>
                <p>company</p>
            </Link>
          </div>

          <div>
            <Link href="/userguide">
              <p>ご利用案内</p>
              <p>guidance</p>
            </Link>
          </div>

          <Link href="contact">
            <button className='px-5 bg-[#f4ba6e] text-white text-center rounded'>
              <p>お問い合わせ</p>
              <p>contact</p>
            </button>
          </Link>
        </div>
      </div>

          <div className='md:hidden fixed w-full bg-white z-40'>
            <div className='p-3'>
              <div className='w-2/4'>
                <Link href="/">
                  <div className='flex'>
                    <Image 
                    src='/images/ホトうさぎ_(小).png' 
                    alt='画像'
                    width={25}  // これらはアスペクト比を維持するための基準値
                    height={100} // 実際の表示サイズは親要素によって決まる
                    className='ml-2'
                    />
                    <p className='ml-3 mt-3'>ホトうさぎ岐阜</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div 
            className='md:hidden fixed cursor-pointer w-6 h-6 top-4 right-6 z-50'
            onClick={() => setIsOpen(!isOpen)}
            >

            <span className={`absolute w-8 h-0.5 bg-black transform transition duration-500 ${isOpen ? 'rotate-[-315deg] translate-y-2' : ''}`}></span>
            <span className={`absolute w-8 h-0.5 bg-black top-2.5 transform transition duration-500 ${isOpen ? 'hidden' : 'block'}`}></span>
            <span className={`absolute w-8 h-0.5 bg-black bottom-0 transform transition duration-500 ${isOpen ? 'rotate-[315deg] -translate-y-3.5' : ''}`}></span>
          </div>

        {/* <div className={`md:hidden bg-white w-2/5 absolute transform duration-500 z-10 ${isOpen ? 'right-0' : '-right-full'}`}> */}
        <div className={`md:hidden bg-white w-2/5 fixed duration-500 z-10 transform ${isOpen ? 'right-0 opacity-100 visible' : 'right-0 opacity-0 invisible'}`}>
          <div className='w-4/5 mr-auto ml-auto h-screen pt-20 [&_p]:mb-4 [&_p]:border-b-2 [&_p]:border-black'>
            <div>
              <Link href="information" className='cursor-pointer'>
                <p>会社案内</p>
              </Link>
            </div>
            <div>
              <Link href="/userguide" className='cursor-pointer'>
                <p>ご利用案内</p>
              </Link>
            </div>
            <div>
              <Link href="contact">
              <p>お問い合わせ</p>
              </Link>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Header