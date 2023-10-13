import React from 'react'
class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <div>
                    <img src="./imgs/plants-store-logo-green.svg" alt="logo" />
                    <p>Simply Natural</p>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Store</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>My Account</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;