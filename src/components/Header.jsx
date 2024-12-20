import React from 'react'
import Logo from './inner-components/Logo'
import NavBar from './inner-components/NavBar'
import SearchBar from './inner-components/SearchBar'
import WhishlistIcon from './inner-components/WhishlistIcon'
import CartIcon from './inner-components/CartIcon'

const Header = () => {
  return (
    <>
    <header className='main-header'>
        <div className="container">
            <div className="header-wrapper">
                <div className="nav-left">
                    <Logo />
                    <NavBar />
                </div>
                <div className="nav-right">
                    <SearchBar />
                    <div className="list-of-items">
                        <WhishlistIcon/>
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header