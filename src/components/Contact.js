import React from "react";
import { Link } from "react-router-dom";

export default function Contact(props){
    return(
        <>
        <div className="contact-container">
            <h4>Get in touch for queries,</h4>
            <p>📞 Phone: 6360883079</p>
            <p>📮 Mail: <Link className="link" to="mailto:afthabsheikh11710@gmail.com">afthabsheikh11710@gmail.com</Link></p>
            <h5>🌐Connect with social media</h5>
            <div className="social-media-container">
                <ul className="social-media-contact">
                    <li className="snap-contact"><Link className="link" to="https://www.snapchat.com/add/afthab_sheikh11"><i className="fab fa-snapchat"> Snapchat</i><img src="images/snap-img.jpg" alt="Snapchat profile" /></Link></li>
                    <li className="facebook-contact"><Link className="link" to="https://www.facebook.com/afthab.sheikh.58"><i className="fab fa-facebook"> facebook</i><img src="images/facebook-img.jpg" alt="Facebook profile" /></Link></li>
                    <li className="linkedin-contact"><Link className="link" to="https://www.linkedin.com/in/afthab-sheikh11710"><i className="fab fa-linkedin"> linkedin</i><img src="images/linkedin-img.png" alt="Linkedin profile" /></Link></li>
                    <li className="instagram-contact"><Link className="link" to="https://www.instagram.com/_sheikh_z_11"><i className="fab fa-instagram"> instagram</i><img src="images/instagram-img.jpg" alt="Instagram profile" /></Link></li>
                </ul>
            </div>
        </div>
        
        </>
    );
}
