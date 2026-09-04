"use client"
import React from 'react'

const PdfViewer2 = () => {
  const handleButtonClick = () => {
    window.open("/images/456.pdf", "_blank");
  };

  return (
    <div>
      <button onClick={handleButtonClick} className='md:text-sm text-xxs'>
      労継続支援Ａ型事業所における利用者の知識・能力向上に係る実施状況報告書
      </button>
    </div>
  )
}

export default PdfViewer2
