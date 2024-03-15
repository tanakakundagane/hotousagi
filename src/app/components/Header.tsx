"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='hidden md:flex justify-between w-9/12 m-auto mt-5  text-sm lg:text-lg'>
        <Link href="/" className='cursor-pointer text-center'>
          <p>就労継続支援A型事業所</p>
          <p>ホトうさぎ岐阜</p>
        </Link>
        <div className='flex [&_p]:mr-5'>
          <div>
            <p>就労継続支援</p>
            <p>A型について</p>
          </div>
          <div>
            <p>作業内容</p>
            <p>work</p>
          </div>
          <div>
            <p>会社案内</p>
            <p>company</p>
          </div>
          <div>
            <p>ご利用案内</p>
            <p>guidance</p>
          </div>
          <div>
            <p>お問い合わせ</p>
            <p>contact</p>
          </div>
        </div>
      </div>

      <div className='md:hidden p-5 fixed w-full z-10'>
        <div className=' flex justify-between w-9/12 m-auto'>
          <div>
            <p>ホトうさぎ岐阜</p>
          </div>
          <div 
            className='cursor-pointer relative w-6 h-6'
            onClick={() => setIsOpen(!isOpen)}
            >
            <span className={`absolute w-8 h-0.5 bg-black transform transition duration-500 ${isOpen ? 'rotate-[-315deg] translate-y-2' : ''}`}></span>
            <span className={`absolute w-8 h-0.5 bg-black top-2.5 transform transition duration-500 ${isOpen ? 'hidden' : 'block'}`}></span>
            <span className={`absolute w-8 h-0.5 bg-black bottom-0 transform transition duration-500 ${isOpen ? 'rotate-[315deg] -translate-y-3.5' : ''}`}></span>
          </div>
        </div>
      </div>

        <div className={`bg-slate-200 w-2/5 absolute transform duration-500 ${isOpen ? 'right-0' : '-right-full'}`}>
          <div className='bg-slate-500 w-4/5 mr-auto ml-auto h-screen pt-20 [&_p]:mb-4 [&_p]:border-b-2 [&_p]:border-black'>
            <div>
              <p>会社案内</p>
            </div>
            <div>
              <p>ご利用案内</p>
            </div>
            <div>
              <p>お問い合わせ</p>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Header