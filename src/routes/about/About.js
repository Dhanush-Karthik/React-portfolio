import './AboutStyle.css';
import Logo from '../../img/profile1.jpg';

function About(){
    return(
        <div className="details">
            <div className='nameCard'>
                <img src={Logo} alt="profile"/>
                <h2>DHANUSH KARTHIK</h2>
            </div>
            <div className="sub">
                <h4><br/>About</h4>
                <p>Pursuing Bachelor of Engineering in Computer Science and Engineering with 9.08 CGPA till Fourth Semester. Strong in design and integration with intuitive problem-solving skills. Experienced in leading and organizing teams.  Strongly motivated to start a career as an entry-level software engineer in a reputed firm driven by technology, where I can contribute with my technical skillset.</p>
                <h4><br/>Education</h4>
                <p>
                    <li>
                        Sri Krishna College of Technology | Coimbatore, Tamil Nadu| Bachelor of Engineering in Computer Science and Engineering| 2020-2024 <br/>
                        <p className="highlights">&nbsp;&nbsp;&nbsp;&nbsp;Pursuing B.E CSE with 9.08 CGPA till Fourth Semester </p>
                    </li>
                    <li>
                        SRK Matric Hr Sec School | Salem, Tamil Nadu  | HSC | 2020 <br/>
                        <p className="highlights">&nbsp;&nbsp;&nbsp;&nbsp;Scored 89.84% in the HSC examination conducted by the State Board </p> 
                    </li>
                    <li>
                        SRK Matric Hr Sec School | Salem, Tamil Nadu | SSLC | 2018 <br/>
                        <p className="highlights">&nbsp;&nbsp;&nbsp;&nbsp;Scored 92.2% in the SSLC examination conducted by the State Board </p>
                    </li> 
                </p>
                <h4><br/>Key Skills and Proficiencies</h4>
                <p>
                    <li>
                        Proficient in <p className="highlights">Java</p>,  <p className="highlights"> Data Structures</p> and <p className="highlights"> Database Management System</p> 
                    </li>
                    <li>
                        Strong in design and integration with intuitive <p className="highlights">problem-solving</p> skills
                    </li>
                    <li>
                        Developed <p className="highlights">RESTful APIs </p> using <p className="highlights">ReactJS</p>, <p className="highlights">Spring Boot</p> and <p className="highlights">PostgreSQL</p>
                    </li>
                    <li>
                        Ability to <p className="highlights">manage</p> a team and <p className="highlights">organized</p> team-based events
                    </li>
                </p>
                <h4><br />Achievements</h4>
                <p>
                    <li>
                        Secured <p className="highlights">second place</p> in <p className="highlights">Code-A-Thon</p> conducted by Sri Ramakrishna Engineering College, Coimbatore
                    </li>
                    <li>
                        <p className="highlights">Finalist</p> at Bugs and Bytes <p className="highlights">hackathon</p> conducted by Riskcovry and PES university, Bangalore
                    </li>
                    <li>
                        Attended 15days’ <p className="highlights">internship</p> and learned the overview concepts of Web Development in <p className="highlights">Brainery Spot Technology, Coimbatore</p>
                    </li>
                    <li>
                        Part of <p className="highlights">Bootcamp</p> Training program
                    </li>
                    <li>
                        <p className="highlights">Organized technical events</p> conducted in college
                    </li>
                </p>
                <h4><br />Certifications</h4>
                <p>
                    <li>
                        Java Programming(Great Learning)
                    </li>
                    <li>
                        Introduction to Java(NPTEL)
                    </li>
                    <li>
                        Python Programming(Great Learning)
                    </li>
                    <li>
                        Effective Writing(NPTEL)
                    </li>
                </p>
                <h4><br />Area of Interest</h4>
                <p>
                    <li>
                        Java Programming 
                    </li>
                    <li>
                        RESTful Application
                    </li>
                    <li>
                        Spring Boot Framework
                    </li>
                    <li>
                        PostgreSQL and MYSQL Database
                    </li>
                </p>
                <h4><br />Other Activities</h4>
                <p >
                    <li >
                        Adobe After Effects
                    </li>
                    <li >
                        Adobe Premier Pro
                    </li>
                    <li >
                        Adobe Photoshop
                    </li>
                    <li >
                        Photography
                    </li>
                    <li >
                        Cricket
                    </li>
                    <li >
                        Astronomy
                    </li>
                    <li >
                        Astro Science
                    </li>
                </p>
                <h4><br/>Languages known</h4>
                <p>
                    <li >
                        English
                    </li>
                    <li >
                        Tamil
                    </li>
                    <li >
                        Telugu
                    </li>
                    <li >
                        French
                    </li>
                    <li >
                        Hindi
                    </li>
                </p>
            </div>
        </div>
    );
}

export default About;