import React from 'react'

export default function Nav() {
  return (
    <header>  
        <ul className='nav'>
            <img className='logo' src='https://imgs.search.brave.com/qJbVbtWAKN54xnVKFTf7pVtcb0h2wQvw5BRqmwxtwC4/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/eWlrLzZLTC95aWs2/S0xvcFQucG5n'/>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>Products</a>
            </li>
            <li>
                <a href=''>Contact Us</a>
            </li>
            <li>
                <a href=''>About Me</a>
            </li>
        </ul>
    </header>
  )
}
