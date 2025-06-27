import React from 'react'
import './Global.css';

const global = () => {
  return (
    <div className="global-wrapper">
      <div className="global">
        <div className="global-left">
          <p>Select Global Chapter:</p>
        </div>
        <div className="global-right">
          <p className='testAnton'>United Kingdom</p>
          <p className='testAnton'>ireland</p>
          <p className='testAnton'>brasil</p>
          <p className='testAnton'>Australia</p>
        </div>
      </div>
    </div>
  )
}

export default global