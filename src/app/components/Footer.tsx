"use client"
import React from 'react'
import PdfViewer1 from './pdfviewer/PdfViewer1'
import PdfViewer2 from './pdfviewer/PdfViewer2'
import PdfViewer3 from './pdfviewer/PdfViewer3'

const Footer = () => {
  return (
    <div className='py-10 bg-zinc-200'>
      <div className='text-center'>
        <div>
          <h1>ホトうさぎ岐阜</h1>
          <p>〒500-8281 岐阜市東鶉3丁目76番地2</p>
        </div>
        <div className='mt-6'>
          <PdfViewer1/>
          <PdfViewer2/>
          <PdfViewer3/>
        </div>
      </div>
    </div>
  )
}

export default Footer