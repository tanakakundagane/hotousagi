"use client"
import React from 'react'

const PdfViewer3 = () => {
  const handleButtonClick = () => {
    window.open("/images/789.pdf", "_blank");
  };

  return (
    <div>
      <button onClick={handleButtonClick} className='md:text-sm text-xxs'>
      就労継続支援Ａ型事業所におけるスコア表（実績Ⅰ～Ⅳ、Ⅵ）
      </button>
    </div>
  )
}

export default PdfViewer3
