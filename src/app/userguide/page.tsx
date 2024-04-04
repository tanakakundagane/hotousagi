"use client"
import React from 'react'
import Header from '../components/Header'

  const Page = () => {

    const someFunction = () => {
    }
    
    function anotherFunction() {
      // 何かしらの処理
    }

  return (
    <div>
      <Header onScrollToSecond={someFunction} onScrollToThird={anotherFunction} showWorkInfo={false}/>
    </div>
  )
}

export default Page
