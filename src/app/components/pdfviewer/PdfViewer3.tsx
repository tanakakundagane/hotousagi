"use client"
import React from 'react'
import { useState } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PdfViewer3 = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [showPdf, setShowPdf] = useState(false);

  const handleButtonClick = () => {
    setShowPdf(true);
    window.open("/images/image3.pdf" , "_blank");
};
  return (
    <div>
      <button onClick={handleButtonClick} className='text-sm'>
      就労継続支援Ａ型事業所におけるスコア表（実績Ⅰ～Ⅳ、Ⅵ）
      </button>

      {showPdf && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {/* <Viewer 
          fileUrl="/images/image1.pdf"
          plugins={[defaultLayoutPluginInstance]} /> */}
        </Worker>
      )}
    </div>
  )
}

export default PdfViewer3