"use client"
// import React, { useEffect, useRef, } from 'react'
// import Header from '../components/Header'


// const Page = () => {

  
  
//   const someFunction = () => {
//   }
  
//   function anotherFunction() {
//     // 何かしらの処理
//   }

//   const nameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const telRef = useRef<HTMLInputElement>(null);
//   const messageRef = useRef<HTMLTextAreaElement>(null);


  
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // console.log(nameRef.current?.value);
//     let data = {
//       name: nameRef.current?.value,
//       email: emailRef.current?.value,
//       tel:telRef.current?.value,
//       message: messageRef.current?.value,
//     };

//     try {
//       const response = await fetch("/api/contacts", {
//         method: "POST",
//         headers: {
//           Accept: "application/json, text/plain",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.status === 200) {
//         console.log("メール送信成功");
//         // 追加の処理が必要な場合ここに記述
//       } else {
//         console.error("送信失敗:", response.status);
//       }
//     } catch (error) {
//       console.error("エラーが発生しました:", error);
//     }
//   };


//   return (
//     <div>
//       <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

//       <div className='pt-14 text-center  bg-[#f4ba6e] md:pt-0 md:mt-2'>
//         <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
//       </div>

//       <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
//         <div className='w-4/6 m-auto mt-10'>
//           <label htmlFor="name">
//             お名前
//           </label>
//           <br/>
//           <input type="text" className='w-full rounded border' id='name' required ref={nameRef}/>
//         </div>
//         <div className='w-4/6 m-auto mt-10'>
//           <label htmlFor="email">
//             メールアドレス
//           </label>
//           <br/>
//           <input type="email" className='w-full rounded border' id='email' required ref={emailRef}/>
//         </div>
//         <div className='w-4/6 m-auto mt-10'>
//           <label htmlFor="tel">
//             電話番号
//           </label>
//           <br/>
//           <input type="tel" className='w-full rounded border' id='tel' required ref={telRef}/>
//         </div>
//         <div className='w-4/6 m-auto mt-10'>
//           <label htmlFor="message">
//             メッセージ
//           </label>
//           <br/>
//           <textarea name='message' className='w-full rounded border' id='message' required ref={messageRef}/>
//         </div>

//         <div className='flex justify-center mt-10'>
//           <button type='submit' className='bg-customGreen text-white p-2 rounded'>
//             送信
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Page

import React, { useState, useRef } from 'react';
import Header from '../components/Header';

const Page = () => {

  const someFunction = () => {
      }
      
  function anotherFunction() {
         // 何かしらの処理
  }

  const [page, setPage] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: ''
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Null合体演算子を使用して、undefinedの場合に空文字を割り当てる
    const safeName = nameRef.current?.value ?? "";
    const safeEmail = emailRef.current?.value ?? "";
    const safeTel = telRef.current?.value ?? "";
    const safeMessage = messageRef.current?.value ?? "";
  
    setFormData({
      name: safeName,
      email: safeEmail,
      tel: safeTel,
      message: safeMessage
    });
  
    setPage('confirm');
  };
  

  const handleFinalSubmit = async () => {
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("メール送信成功");
        // 成功時の処理（例: リダイレクトなど）
      } else {
        console.error("送信失敗:", response.status);
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  if (page === 'confirm') {
    return (
      <div>
        <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>
        <h2 className='pt-20'>確認ページ</h2>
        <p>お名前: {formData.name}</p>
        <p>メールアドレス: {formData.email}</p>
        <p>電話番号: {formData.tel}</p>
        <p>メッセージ: {formData.message}</p>
        <button onClick={() => setPage('form')} className='bg-customGreen p-1'>修正する</button>
        <button onClick={handleFinalSubmit}>送信する</button>
      </div>
    );
  }

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false} />
      <div className='pt-14 text-center  bg-[#f4ba6e] md:pt-0 md:mt-2'>
        <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="name">お名前</label>
          <br />
          <input type="text" className='w-full rounded border' id='name' required ref={nameRef} />
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="email">メールアドレス</label>
          <br />
          <input type="email" className='w-full rounded border' id='email' required ref={emailRef} />
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="tel">電話番号</label>
          <br />
          <input type="tel" className='w-full rounded border' id='tel' required ref={telRef} />
        </div>
        <div className='w-4/6 m-auto mt-10'>
          <label htmlFor="message">メッセージ</label>
          <br />
          <textarea name='message' className='w-full rounded border' id='message' required ref={messageRef} />
        </div>
        <div className='flex justify-center mt-10'>
          <button type='submit' className='bg-customGreen text-white p-2 rounded'>確認画面へ</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
