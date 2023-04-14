import './FootBarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//npm install --save @fortawesome/free-brands-svg-icons
import {faGithub,faInstagram,faFacebook,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'

function FootBar(){

    let items = [
        {
            id:0,
            href: "https://github.com/Dhanush-Karthik",
            class:faGithub
        },
        {
            id:1,
            href: "https://www.linkedin.com/in/dhanush-karthik-348a741bb",
            class:faLinkedin
        },
        {
            id:2,
            href: "https://www.facebook.com/profile.php?id=100006168917057",
            class:faFacebook
        },
        {
            id:3,
            href: "https://twitter.com/Dhanushdk45",
            class:faTwitter
        },
        {
            id:4,
            href: "https://www.instagram.com/_._dk7_._/",
            class:faInstagram
        }
    ]
    return(
        <div className='footer'>
            <div className="media-icons">
                {items.map(item => <a href={item.href} key={item.id}><FontAwesomeIcon icon={item.class} style={{color: "#ffffff",}} /></a>)}
            </div>
        </div>
    );
}

export default FootBar;