"use client"
import React from 'react'

const PdfViewer1 = () => {
  const handleButtonClick = () => {
    window.open("/images/123.pdf", "_blank");
  };

  return (
    <div>
      <button onClick={handleButtonClick} className='md:text-sm text-xxs'>
      就労継続支援Ａ型事業所における地域連携活動実施状況報告書
      </button>
    </div>
  )
}

export default PdfViewer1
