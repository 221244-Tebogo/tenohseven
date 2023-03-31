import React from "react";
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import logo from '../assets/logo.png'

const Footer=()=>{
    return(
        <div className="footer">
            <div>
            <img alt="footerImg" src={logo}/>
            </div>
            <div>
                <a href="/">Web Design</a>
                <a href="/">Graphic Design</a>
                <a href="/">Printing</a>
            </div>
            <div>
                <a href="/">FAQ</a>
                <a href="/">Terms of Use</a>
                <a href="/">Privacy</a>
            </div>
            <div className="footer-img">
            <img alt="social-icon" src={fb}/>
            <img alt="social-icon" src={twitter}/>
            <img alt="social-icon" src={instagram}/>
            </div>

        </div>
    )
}
export default Footer;