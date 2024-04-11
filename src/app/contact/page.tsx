"use client"
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'

const Page = () => {

  const someFunction = () => {
  }
  
  function anotherFunction() {
    // 何かしらの処理
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);
    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      tel:telRef.current?.value,
      message: messageRef.current?.value,
    }

    await fetch("/api/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 200) console.log("メール送信成功")
    })
  };

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

      <div className='pt-14 text-center  bg-[#f4ba6e] md:pt-0 md:mt-2'>
        <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
      </div>

      <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="name">
            お名前
          </label>
          <br/>
          <input type="text" className='w-full rounded border' id='name' required ref={nameRef}/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="email">
            メールアドレス
          </label>
          <br/>
          <input type="email" className='w-full rounded border' id='email' required ref={emailRef}/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="tel">
            電話番号
          </label>
          <br/>
          <input type="tel" className='w-full rounded border' id='tel' required ref={telRef}/>
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="message">
            メッセージ
          </label>
          <br/>
          <textarea name='message' className='w-full rounded border' id='message' required ref={messageRef}/>
        </div>

        <div className='flex justify-center mt-10'>
          <button type='submit' className='bg-customGreen text-white p-2 rounded'>
            送信
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page