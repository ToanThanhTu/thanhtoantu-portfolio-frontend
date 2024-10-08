import contactMethods from '../data/contactMethods.json';

import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconMap: { [key: string]: JSX.Element } = {
    Email: <EmailIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    Phone: <SmartphoneIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    LinkedIn: <LinkedInIcon sx={{ fontSize: 35, marginRight: 1 }} />,
    GitHub: <GitHubIcon sx={{ fontSize: 35, marginRight: 1 }} />
};

function Contact() {
    return (
        <section id='contact-section' className="portfolio-width md:py-96 py-40">
            <p className='italic text-center'>Let's work together!</p>
            <h2 className='font-semibold text-center'>Contact Me</h2>
            <ul className='sm:flex sm:justify-center sm:space-x-4 mt-10 grid grid-cols-2 gap-4 m-auto w-fit'>
                {contactMethods.map(({ name, icon, url }) => {
                    return (
                        <li key={name} className="text-xl">
                            <a href={url} target="_blank" rel="noreferrer">
                                <p>{iconMap[icon]}{name}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Contact;