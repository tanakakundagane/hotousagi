'use client'
import React, { useState } from 'react'

function ImageViewer() {

  const [isImageExpanded, setImageExpanded] = useState(false);

  const showImage = () => {
    setImageExpanded(true);
  };

  const toggleImage = () => {
    setImageExpanded(!isImageExpanded);
  }

    return (

      <div className='text-center'>
        <button 
        className="text-xs"
        onClick={showImage}
        >
          就労支援A型事業所におけるスコア表（全体）
        </button>

        {isImageExpanded && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={toggleImage}
          ></div>
        )}

        <img
            src="/images/hasikei.jpg" 
            alt="Descriptive Alt Text"
            className={` ${isImageExpanded ? 'fixed top-1/2 left-1/2 max-w-none max-h-[90vh] -translate-x-1/2 -translate-y-1/2 z-50' : 'hidden'}`}
          />

      </div>
    );
  }

export default ImageViewer