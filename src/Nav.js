import React from 'react'

const Nav = ({title,subTitle}) => {
  return (
    <nav>
        <h1>{title}</h1><h1 className='subTitle'>{subTitle}</h1>
    </nav>
  )
}

export default Nav