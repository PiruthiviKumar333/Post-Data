import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className='missing'>
        <h1>404 - Page Not Found</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae consectetur voluptatibus quis reiciendis velit nobis 
            veritatis dolorum error vel, nulla unde repellendus ratione 
            aliquam vero ad modi quae, perspiciatis molestiae?</p>

            <Link to={"/"}>Home</Link>
    </div>
  )
}

export default Missing