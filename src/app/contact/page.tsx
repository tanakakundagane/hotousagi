"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';



const Page = () => {

  const someFunction = () => {
  }
  
  function anotherFunction() {
    // 何かしらの処理
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [page, setPage] = useState('form'); // form, confirm, submit, complete

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleConfirm = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('すべての項目を入力してください。');
    } else {
    setPage('confirm');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setPage('complete'); // Change page to show completion message
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました');
    }
  };

  const handleEdit = () => {
    setPage('form');
  };

  return (
    <div className='mb-10'>
    <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

    <div className='pt-16 text-center  bg-[#f4ba6e] lg:pt-0 lg:mt-2'>
      <h1 className='text-white p-5 lg:text-2xl md:text-xl'>お問い合わせ</h1>
    </div>


      {page === 'form' && (
        <form onSubmit={handleConfirm} className='m-auto w-5/6 text-left'>
          <div className='w-4/6 m-auto mt-10'>
            <div className='flex'>
              <label>★お名前</label>
              <p className='text-red-400 ml-3'>＜必須＞</p>
            </div>
            <br/>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className='w-full text-black'/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <div className='flex'>
              <label>★メールアドレス</label>
              <p className='text-red-400 ml-3'>＜必須＞</p>
            </div>
            <br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className='w-full text-black'/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <div className='flex'>
              <label>★電話番号</label>
              <p className='text-red-400 ml-3'>＜必須＞</p>
            </div>
            <br/>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className='w-full text-black'/>
          </div>

          <div className='w-4/6 m-auto mt-10'>
            <div className='flex'>
              <label>★お問い合わせ</label>
              <p className='text-red-400 ml-3'>＜必須＞</p>
            </div>
            <br/>
            <textarea name="message" value={formData.message} onChange={handleChange} className='w-full h-20 text-black'/>
          </div>

          <div className='text-center mt-10'>
            <p>
              <Link href="personal">
                <button className='text-blue-400'>個人の情報取り扱い</button>
              </Link>
              をご確認のうえ、同意された方は確認画面へお進みください。</p>
          </div>

          <div className='mt-10 text-center pb-0'>
              <button type="submit" className='p-2 rounded bg-customGreen text-white active:bg-darkGreen'>確認画面へ</button>
          </div>

        </form>
      )}

      {page === 'confirm' && (
        <div className='w-2/3 mx-auto mb-10'>
          <div className='w-2/3 mx-auto'>
            <h2 className='text-center my-10 py-2 text-xl bg-white'>確認ページ</h2>
            
            <p>★お名前</p>
            <p className='md:ml-20 ml-10 mt-1 text-black'>{formData.name}</p>

            <p className='mt-5'>★メールアドレス</p>
            <p className='md:ml-20 mt-1 text-black'>{formData.email}</p>

            <p className='mt-5'>★電話番号</p>
            <p className='md:ml-20 ml-10 mt-1 text-black'>{formData.phone}</p>

            <p className='mt-5'>★お問い合わせ内容</p>
            <p className='md:ml-20 ml-10 mt-1 text-black'>{formData.message}</p>

            <div className='mt-10 text-center'>
              <button onClick={handleSubmit} className='p-3 mx-3 bg-customGreen rounded text-white active:bg-darkGreen'>送信</button>
              <button onClick={handleEdit} className='p-3 mx-3  bg-customGreen rounded text-white active:bg-darkGreen'>訂正</button>
            </div>
          </div>
        </div>
      )}
      {page === 'complete' && (
        <div className='text-center mt-10'>

          <h2 className='md:text-xl'>送信完了しました。</h2>
          <p>お問い合わせいただきありがとうございます。</p>
          <p>内容を確認のうえ、返信させていただきます。</p>
          <div className='mt-10 p-3 bg-customGreen w-1/3 rounded mx-auto text-white'>
            <Link href="/">ホームに戻る</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;

