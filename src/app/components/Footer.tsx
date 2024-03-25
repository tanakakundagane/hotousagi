import React from 'react'
import ImageViewer from './ImageViewer'

const Footer = () => {
  return (
    <div className='py-10 bg-zinc-200'>
      <div className='text-center'>
        <div>
          <h1>ホトうさぎ岐阜</h1>
          <p>〒500-8281 岐阜市東鶉3丁目76番地2</p>
        </div>
      </div>
      <ImageViewer/>
    </div>
  )
}

export default Footer