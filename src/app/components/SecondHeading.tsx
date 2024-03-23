import Image from 'next/image'
import React from 'react'

const SecondHeading = () => {
  return (
    <div className='mt-20 w-5/6 m-auto '>
      <div className='text-center p-5 text-xl relative'>
        <div className='absolute top-10 bg-[#b49531]  w-1/4 h-0.5 md:left-20'></div>
        <h1 className='text-2xl'>就労継続支援<br/>A型とは</h1>
        <div className='absolute top-10 right-0 bg-[#b49531]  w-1/4 h-0.5 md:right-20'></div>
      </div>
      <div className='lg:flex'>
        <div className='lg:pr-10 lg:pl-10'>
          <p className='text-lg'>
            障害者総合支援法（旧 障害者自立支援法）に定められた就労支援事業の一つです。 一般企業への就職が困難な障がい者や難病の方の就労機会を提供するとともに、生産活動を通じて、その知識と能力の向上に必要な訓練などの障がい福祉サービスを供給することを目的としています。 障がい者や難病の方と雇用契約を結び、原則として最低賃金を保障するしくみの&quot;雇用型&quot;の障がい福祉サービスです。「ホトうさぎ岐阜」では、年齢層の様々な方が活躍しています。
          </p>
        </div>

        <div className='p-2 flex justify-end w-full h-auto'>
          <div className='w-1/4 max-w-xs lg:w-full'>
            <Image
              src='/images/読書うさぎさん.png'
              alt='画像'
              layout='responsive'
              width={100}  // これらはアスペクト比を維持するための基準値
              height={100} // 実際の表示サイズは親要素によって決まる
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHeading