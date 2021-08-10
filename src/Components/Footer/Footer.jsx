import React from 'react';
import './Footer.css';

const Footer = () => {

    return(
    
        <div className="footer">

            <a className="github" title="GitHub" href="https://github.com/AdrianaFayos" ><FontAwesomeIcon icon={faGithub}/></a>
            <a className="linkedin" title="Linkedin" href="https://www.linkedin.com/in/adrianafayos/" ><FontAwesomeIcon icon={faGithub}/></a>

        </div>  
    )

}

export default Footer;