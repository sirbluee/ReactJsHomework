import React from 'react'

export default function Feedback() {
  return (
    <div className='feedback'>
      <h2>Write Your Feedback here  </h2>
      <form>
        <input className='write' type='text' placeholder='Your Name'/><br/>
        <input className='write' type='text' placeholder='Your Email Address'/><br/>
        <input className='write' type='text' placeholder='Write something..' style={{height: 100, paddingTop: 0}}/><br/>
      </form>
      <button>Sumit</button>
    </div>
  )
}