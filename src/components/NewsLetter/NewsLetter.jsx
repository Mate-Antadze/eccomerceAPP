import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscrbe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Adress' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
