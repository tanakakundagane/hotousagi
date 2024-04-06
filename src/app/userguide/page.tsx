"use client"
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

  const Page = () => {

    const someFunction = () => {
    }
    
    function anotherFunction() {
      // 何かしらの処理
    }

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

      <div className='text-center pt-14 '>
        <h1 className='lg:text-2xl md:text-xl mt-10'>
          ご利用の流れ
        </h1>
        <p className='lg:text-2xl md:text-xl'>
          guidance
        </p>
      </div>

      <div className='w-5/6 mx-auto mt-10'>
        <div className='mb-3'>
          <h1 className='md:text-xl'>
            ①事業所見学
          </h1>
        </div>
        <div className='border-2 border-customYellow rounded'>
          <p className='md:text-xl p-2'>
          まず、事業所見学を行っていただきます。<br/>
          ご家族などの付き添いも可能です。<br/>
          見学の際に事業所の様子、作業内容のご紹介を行い、ご不明点などお答え致します。
          </p>
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-10'>
        <div className='mb-3'>
          <h1 className='md:text-xl'>
            ②面接
          </h1>
        </div>
        <div className='border-2 border-customYellow rounded'>
          <p className='md:text-xl p-2'>
          面接による話し合いを行います<br/>
          面接にはハローワークからの紹介状が必要になります。<br/>
          </p>
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-10'>
        <div className='mb-3'>
          <h1 className='md:text-xl'>
            ③体験実習
          </h1>
        </div>
        <div className='border-2 border-customYellow rounded'>
          <p className='md:text-xl p-2'>
          実際に作業を体験していただきます。<br/>
          実習期間はご希望に考慮いたします。<br/>
          </p>
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-10'>
        <div className='mb-3'>
          <h1 className='md:text-xl'>
            ④各種手続き
          </h1>
        </div>
        <div className='border-2 border-customYellow rounded'>
          <p className='md:text-xl p-2'>
          採用が決まりましたら、利用開始に向けた手順をご説明いたします。<br/>
          （受給者証の交付手続きなど）<br/>
          </p>
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-10'>
        <div className='mb-3'>
          <h1 className='md:text-xl'>
            ⑤利用・就業開始
          </h1>
        </div>
        <div className='border-2 border-customYellow rounded'>
          <p className='md:text-xl p-2'>
            従業員 兼 利用者さんとして訓練のスタートです。
          </p>
        </div>
      </div>

      <div className='w-5/6 mx-auto mt-10 mb-10'>
        <div className='w-2/5 bg-customGreen text-center rounded-t-lg'>
          <h1 className='py-3'>対象となる方</h1>
        </div>
        <div className='border-2 border-customGreen rounded'>
          <p className='md:text-xl p-2'>
            ・働きたいと意欲のある方<br/>
            ・18歳以上65歳未満の方<br/>
            ・障害者手帳をお持ちか、主治医の意見書がある方<br/>
            ・雇用契約による勤務が可能な方
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  )
}

export default Page
