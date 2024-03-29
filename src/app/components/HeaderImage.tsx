import React from 'react'
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div className='relative top-12 w-full h-[500px] lg:h-[600px]'>
      <Image
        src='/images/easter-ga68fdeac9_1920.jpg'
        alt='メイン画像'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default HeaderImage
