import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer () {
    return (
        <footer className="footer" id="footer">
            <a href="https://www.linkedin.com/in/sandeep-kumar-k-a8a494246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
            <FaLinkedin size={30} color="#0077B5" />
            </a>
            {/* <a href="https://github.com/SandeepKumarK098/" target='_blank'>
            <FaGithub size={30} color="rgb(124, 198, 124)" />
            </a> */}
            <a href="https://leetcode.com/u/SandeepBIT/" target='_blank'>
            <SiLeetcode size={30} color="rgb(48, 22, 22)" />
            </a>
            <a href="https://www.instagram.com/i_sandheepp.gowdaaa?igsh=ZThxamMzMXN4d2Y5" target='_blank'>
            <FaInstagram size={30} color='brown' />
            </a>
        </footer>
    );
}

