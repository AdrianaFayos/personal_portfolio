import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../img/af.png'

const Header = () => {

    let history = useHistory();

    return(
    
        <div className="navbar">

            <div className="navbarLeft">
                <div onClick={() => history.push('/')} className="link">
                    <img src={logo} alt="logo" width="80" className="af"/>
                </div>
                
            </div>
            <div className="navbarRight">
                <div onClick={() => history.push('/about')} className="link">ABOUT</div>
                <div onClick={() => history.push('/projects')} className="link">PROJECTS</div>
                <div onClick={() => history.push('/contact')} className="link">CONTACT</div>
            </div>

        </div>  
    )

}

export default Header;