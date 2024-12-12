import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/registration' >registration</Link></li>
            </ul>
        </nav>

    <Outlet/>
    </div>
  )
}

export default MainLayout