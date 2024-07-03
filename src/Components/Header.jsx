import React from 'react'
import "../index.css"
const Header = (props) => {
    return (
        <h2 className='text-5xl text-white font-semibold py-10'>{props.title}</h2>
    )
}

export default Header;