"use client"
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router';



const Page = () => {

  const someFunction = () => {
  }
  
  function anotherFunction() {
    // 何かしらの処理
  }

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>

      <div className='text-center pt-14'>
        <h1 className='lg:text-2xl md:text-xl'>
          会社案内
        </h1>
        <p className='lg:text-2xl md:text-xl'>
          Company
        </p>
      </div>

      <table className='border border-gray-950 w-5/6 mx-auto'>
        <tbody>
          <tr className='border-b border-gray-950'>
            <th>事業所名</th>
            <td>ホトうさぎ岐阜</td>
          </tr>

          <tr>
            <th>所在地</th>
            <td>
              <p>〒500-8281</p>
              <p>岐阜市東鶉3丁目76番地2
              </p>
            </td>
          </tr>

          <tr>
            <th>地図</th>
            <td>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.9256291688143!2d136.7406337!3d35.3823005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003af2ed623782b%3A0xd1de192bf2bbe02e!2z44CSNTAwLTgyODEg5bKQ6Zic55yM5bKQ6Zic5biC5p2x6baJ77yT5LiB55uu77yX77yW4oiS77yS!5e0!3m2!1sja!2sjp!4v1712064433640!5m2!1sja!2sjp" 
                // width="300" 
                // height="" 
                style={{width:'80%',border:0}} 
                allowFullScreen={true} 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Page
