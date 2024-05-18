"use client"
import Link from 'next/link'
import React from 'react'
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
      <div className='w-4/5 mx-auto mb-20'>
        <div className='pt-20'>
          <div className='py-6 text-center'>
            <h1 className='md:text-2xl text-xl'>個人情報保護について</h1>
          </div>
          <div className='mb-5'>
            <p className='leading-7 sm:text-lg'>ホトうさぎ岐阜」では、ご提供いただいた個人に関する情報（以下「個人情報」といいます）につきましては、適切に保護することが社会的責務と考えています。以下に当社の個人情報の取り扱いと保護に関しての方針を掲載いたします。</p>
          </div>
        </div>

        <div className='mb-5'>
          <h1 className='mb-5 md:text-2xl text-xl '>1.個人情報の管理</h1>
          <p className='leading-7 sm:text-lg'>当社は、個人情報の取り扱いについて十分な注意をはらいます。また、個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破壊・改ざん・漏洩または再提供（３．「第三者への情報提供について」に記載する場合を除きます。などの無いように、適切な管理を実施いたします。</p>
        </div>

        <div className='mb-5'>
          <h1 className='mb-5 md:text-2xl text-xl'>2.個人情報の利用</h1>
          <p className='leading-7 sm:text-lg'>ご提供いただいた個人情報は機密扱いされ、当社からの案内や情報を提供する以外の目的として使用されることはありません。</p>
        </div>

        <div className='mb-5'>
          <h1 className='mb-5 md:text-2xl text-xl'>3.第三者への情報提供について</h1>
          <p className='leading-7  sm:text-lg'>当社は、本人の同意を得た場合以外は個人情報を第三者に提供しません。ただし、以下の利用に関しては、個人情報を第三者に提供させていただくことがあります。</p>
        </div>

        <div className='border-lime-600 border-2 rounded'>
          <div className='p-3'>
            <h2 className='mb-5 mt-2 md:text-2xl text-xl'>・法令等に基づく利用</h2>
            <p className='leading-7  sm:text-lg'>当社は、法的根拠、公衆の利益により、裁判所、行政機関、監督官庁その他の公的機関から第三者に情報を提供するよう強制され、拒否する合理的な理由がない場合には、個人情報を開示させていただくことがあります。</p>

            <h2 className='my-5 md:text-2xl text-xl'>・社外への業務委託のための利用</h2>
            <p className='leading-7  sm:text-lg mb-2'>個人情報の処理、サービス、情報等を提供するため、もしくはキャンペーン・アンケート等の実施または監査を行うために業務を外部業者へ委託する場合、当社の厳正な管理下のもと、業務を行うのに必要最低限の範囲で、個人情報の預託、提供等をさせていただくことがあります。</p>
          </div>
        </div>

        <div className='my-5'>
          <h1 className='mb-5 md:text-2xl text-xl'>4.国外からのアクセスについて</h1>
          <p className='leading-7  sm:text-lg'>ご提供いただいた個人情報は機密扱いされ、当社からの案内や情報を提供する以外の目的として使用されることはありません。</p>
        </div>

        <div className='my-5'>
          <h1 className='mb-5 md:text-2xl text-xl'>5.法令等の遵守について</h1>
          <p className='leading-7  sm:text-lg'>ご提供いただいた個人情報は機密扱いされ、当社からの案内や情報を提供する以外の目的として使用されることはありません。</p>
        </div>

        <div className='mt-10 text-center'>
          <Link href="/contact">
            <button className='bg-customGreen p-2 text-white'>戻る</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default page