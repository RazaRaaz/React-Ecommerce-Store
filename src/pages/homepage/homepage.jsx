import React from 'react'
import './homepage.scss'
import Directory from '../../components/dirctory/directory.jsx'


function HomePage() {
       return (
              <div className="homepage">
                     <div className='directory-menu'>
                            <Directory />
                     </div>
              </div>
       )
}

export default HomePage;