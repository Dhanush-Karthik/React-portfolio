import './ProjectsStyles.css';
import Cards from '../../components/cards/Cards';
import HTML from '../../img/html.webp';
import Node from '../../img/node.png';
import Android from '../../img/android.jpg';
import Spring from '../../img/spring.png';
import Java from '../../img/java.png';
import C from '../../img/c.jpg';

let details = [
    {
        image:HTML,
        title:"Personal Portfolio (HTML-CSS)",
        content:"My personal portfolio developed using HTML and CSS",
        href:"https://dhanushdk.netlify.app"
    },
    {
        image:Node,
        title:"Emails on Whatsapp (Node)",
        content:"A Node server to send emails from WhatsApp",
        href:"https://github.com/Dhanush-Karthik/Email-WhatsApp-Server"
    },
    {
        image:Android,
        title:"Hand Cricket Game (Android)",
        content:"An android application to play Hand Cricket Game",
        href:"https://github.com/Dhanush-Karthik/HandCricket"
    },
    {
        image:Spring,
        title:"Login and Signup (Spring Boot)",
        content:"A Spring Boot backend application for a login and signup page",
        href:"https://github.com/Dhanush-Karthik/Login-Signup-Form"
    },
    {
        image:Java,
        title:"Parking Management (AWT)",
        content:"Parking management Application developed using AWT and JDBC",
        href:"https://github.com/Dhanush-Karthik/Parking-Management-AWT"
    },
    {
        image:C,
        title:"Parking Management (DS)",
        content:"Parking management console application using Doubly Linked list",
        href:"https://github.com/Dhanush-Karthik/Parking-Management"
    },
];
function Projects(){
    return(
        <div className='container-c'>
            <h1 style={{color:"cyan",fontWeight:"10px",fontFamily:"Poppins"}}>Projects</h1>
            <div className='cards-container'>
                <Cards details={details[0]}/>
                <Cards details={details[1]}/>
                <Cards details={details[2]}/>
                <Cards details={details[3]}/>
                <Cards details={details[4]}/>
                <Cards details={details[5]}/>
            </div>
        </div>
    );
}

export default Projects;