// Import icons from Material-UI
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// Import profile picture, skills and professional development data
import profilePic from "../assets/profile-pic.png";
import skills from "../data/skills.json";
import developments from "../data/professional-dev.json";

function About() {
    return (
        <section id='about-section' className="flex-col justify-between items-center">
            {/* Intro section */}
            <section className="block lg:flex lg:justify-between lg:items-center lg:space-x-12 space-y-12 h-1/2 portfolio-width pt-44 pb-32 px-8">
                {/* div with Profile pic and name */} 
                <div className="lg:w-1/2">
                    <img src={profilePic} alt="profile picture" className="w-14 rounded-full mb-6" />
                    <h1>Hello! I'm Thanh Toan Tu</h1>
                    <p className="mt-1 italic">You can also call me Trevor</p>
                </div>
                {/* div with brief profile description and buttons */}
                <div className="lg:w-1/2 space-y-5">
                    <h2>A Software Engineer based in Sydney, Australia</h2>
                    <p>I have a passion for web application development and I'm always looking to learn new things.</p>
                    <div className="grid lg:grid-cols-2 lg:w-72 lg:pt-4 gap-4 grid-cols-3 text-center">
                        <a href='#contact-section' className="btn">Talk with me</a>
                        <a href='#work-section' className="btn">See my work</a>
                        <a href='https://raw.githubusercontent.com/ToanThanhTu/resume/main/Resume_ThanhToanTu.pdf' className='btn'>Download CV</a>
                    </div>
                </div>
            </section>
            {/* Skills and Professional Development section */}
            <section className="bg-primary-background">                
                <section className="xl:flex xl:justify-between xl:space-x-12 xl:space-y-0 space-y-8 portfolio-width py-20 px-8">
                    {/* Skills Summary section */}
                    <div className="xl:w-1/2">
                        <h3>Skills Summary</h3>
                        <ul>
                            {skills.map(({ name, content }) => {
                                return (
                                    <li key={name} className='flex mt-6'>
                                        <CodeIcon className='mr-2' />
                                        <div>
                                            <h4>{name}</h4>
                                            <p>{content}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Professional Development section */}
                    <div className="xl:w-1/2">
                        <h3>Professional Development</h3>
                        <ul>
                            {developments.map(({ name, origin }) => {
                                return (
                                    <li key={name} className='flex mt-6'>
                                        <KeyboardDoubleArrowRightIcon className='mr-2' />
                                        <div>
                                            <h4>{name}</h4>
                                            <p>{origin}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default About;