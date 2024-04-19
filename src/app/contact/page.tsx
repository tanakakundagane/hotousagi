"use client"
import React, { useState, useRef } from 'react';
import Header from '../components/Header';

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    const [pageState, setPageState] = useState('form');
    
    let formData = {
      name:nameRef.current?.value,
      email: emailRef.current?.value,
      tel: telRef.current?.value,
      message: messageRef.current?.value
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPageState('confirm');
    }

    
    const handleSend = async (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // console.log("メール送信")
      await fetch("api/contacts" , {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.status === 200){
          setPageState('submitted'); //送信完了ページへ
        }
      })
    };

    const handleEdit = () => {
      setPageState('form'); // 入力フォームに戻る
    };

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false} />
      <div className='pt-14 text-center  bg-[#f4ba6e] md:pt-0 md:mt-2'>
        <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
      </div>

      {pageState === 'form' && (
          <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <div className='w-4/6 m-auto mt-10'>
            <label htmlFor="name">お名前</label>
            <br />
            <input 
              type="text" 
              className='w-full rounded border' 
              id='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              ref={nameRef}/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <label htmlFor="email">メールアドレス</label>
            <br />
            <input 
            type="email" 
            className='w-full rounded border'
            id='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required  
            ref={emailRef}/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <label htmlFor="tel">電話番号</label>
            <br />
            <input 
            type="tel" 
            className='w-full rounded border' 
            id='tel' 
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required 
            ref={telRef}/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <label htmlFor="message">メッセージ</label>
            <br />
            <textarea 
            name='message' 
            className='w-full rounded border' id='message' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
            ref={messageRef}/>
          </div>

          <div className='flex justify-center mt-10'>
            <button 
            type='submit' className='bg-customGreen text-white p-2 rounded'>確認画面へ</button>
          </div>
        </form>
      )}

      {pageState === 'confirm' && (
        <div className='w-1/2 mx-auto text-center mt-10'>
        <h2 className='text-lg'>入力内容の確認</h2>
        <p className='mt-4'>
          <strong>お名前:</strong> {formData.name}
        </p>
        <p className='mt-4'>
          <strong>メールアドレス:</strong> {formData.email}
        </p>
        <p className='mt-4'>
          <strong>電話番号:</strong> {formData.tel}
        </p>
        <p className='mt-4'>
          <strong>メッセージ:</strong> {formData.message}
        </p>
        <div className='mt-4'>
          この内容で
          <button onClick={handleSend} className='px-2 mx-2 bg-customGreen text-white rounded'>送信</button>
          <button onClick={handleEdit} className='px-2 mx-2 bg-customGreen text-white rounded'>修正する</button>
        </div>
      </div>
      )}
      {pageState === 'submitted' && (
        <div>送信完了しました！</div>
      )}
    </div>
  );
};


export default Page;
