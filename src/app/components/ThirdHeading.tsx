import Image from 'next/image'
import React from 'react'

const ThirdHeading = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='mt-14 w-5/6 m-auto'>
      <div className='text-center p-5 text-xl relative'>
      <div className='absolute top-10 bg-[#b49531]  w-1/4 h-0.5 md:left-20'></div>
        <h1 className='text-2xl'>作業内容<br/>work</h1>
        <div className='absolute top-10 right-0 bg-[#b49531]  w-1/4 h-0.5 md:right-20'></div>
      </div>
      <div className='lg:flex lg:flex-row-reverse'>
        <div className='lg:pr-10 lg:pl-10'>
          <p className='text-lg'>
          主な作業は、福祉用具の清掃、梱包、修理になります。関連会社である（株）ナイスワークで使用したベッドや、車椅子、歩行器などを次に使われるお客様が安心して使うことができるよう努めます。 また福祉施設で使われている車椅子や、歩行器などの修理も行って頂きます。 初めは分からないことが多々あるかと思いますが、先輩社員が優しく教えていきますので安心して作業に取り組めます。
          </p>
        </div>

        <div className='p-2 flex justify-end w-full h-auto'>
          <div className='w-1/4 max-w-xs lg:w-full'>
            <Image
              src='/images/帽子うさぎさん.png'
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
});

ThirdHeading.displayName = 'ThirdHeading';

export default ThirdHeading