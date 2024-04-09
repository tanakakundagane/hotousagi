"use client"
import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'

const page = () => {

  const someFunction = () => {
  }
  
  function anotherFunction() {
    // 何かしらの処理
  }

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

      <div className='pt-14 text-center  bg-[#f4ba6e]'>
        <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
      </div>

      <form>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="name">
            お名前
          </label>
          <br/>
          <input type="text" className='w-full rounded border' id='name' required/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="email">
            メールアドレス
          </label>
          <br/>
          <input type="email" className='w-full rounded border' id='email' required/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="tel">
            電話番号
          </label>
          <br/>
          <input type="tel" className='w-full rounded border' id='tel' required/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="message">
            メッセージ
          </label>
          <br/>
          <textarea name='message' className='w-full rounded border' id='message' required/>
        </div>
      </form>
    </div>
  )
}

export default page