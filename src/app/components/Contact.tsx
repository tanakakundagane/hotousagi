import React from 'react'

const Contact = () => {
  return (
    <div className='mt-10 pb-10 pt-10 bg-custom-image bg-cover bg-center w-full'>
      <div className='text-center'>
        <div>
          <h1 className='text-2xl'>お問い合わせ</h1>
          <p className='text-xl'>contact</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='text-center text-xl'>
          <p>TEL</p>
          <p>058-275-1682</p>
          <p>FAX</p>
          <p>058-277-4136</p>
        </div>
        <div className='m-auto mt-5 rounded text-white text-center text-xl py-3 w-1/2 bg-[#f4ba6e]'>
          <h1>お問い合わせ</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact