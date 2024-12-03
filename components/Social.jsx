import { m } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";


const socials = [
    { icon: <FaGithub></FaGithub>, path: 'https://github.com/ismailusta' },
    { icon: <FaLinkedin></FaLinkedin>, path: 'https://www.linkedin.com/in/ismail-usta-733770209/' },
    { icon: <FaYoutube></FaYoutube>, path: 'https://www.youtube.com/@mordecool28' },
    { icon: <FaTwitter></FaTwitter>, path: 'https://x.com/Ismailizmm' },
];
const Social = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}
                target="_blank"
                rel="noopener noreferrer" >
                {item.icon}
            </Link>
        })}
    </div>
}

export default Social