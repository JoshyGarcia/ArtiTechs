import React from "react";
import '../src/Footer.css';

const Footer = () => {
    return (

        <div className="footerContainer">
           <div className="footerLeft">
                <p><b><font size = "+2">ArtiTechs</font></b></p>
                <p>000-000-0000</p>
                <p> gothamgames@artitechs.com </p>
                <p>© Powered by ArtiTechs 2023</p>
            </div> 
            <div className="footerCenter">
                <p>Quick Links</p>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="footerRight">
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div>
                <p>Subscribe</p>
                <img src="/Facebook_logo_(square).png.webp" alt="Facebook Logo" width={20} height={20}/>
                <img src="/Instagram-logo-transparent-PNG.png" alt="Instagram Logo" width={20} height={20}/>
                <img src="/Twitter_Logo.avif" alt="Twitter Logo" width={20} height={20}/>
            </div>
            
           


        </div> 
    )
}

export default Footer