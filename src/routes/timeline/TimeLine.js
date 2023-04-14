import "./TimeLineStyle.css";

let items = [
  {
    id: 1,
    year: 2022,
    topic: "Spring Boot",
    description:
      "Built a RESTful API using Spring Boot framework for login and signup page to store data in PostgreSQL database (Spring Boot)",
  },
  {
    id: 2,
    year: 2022,
    topic: "Bugs and Bytes",
    description:
      "Finalist at Bugs and Bytes hackathon conducted by Riskcovry and PES university, Bangalore",
  },
  {
    id: 3,
    year: 2022,
    topic: "Emails on WhatsApp",
    description: "Hosted a node server to send emails from WhatsApp (REST API)",
  },
  {
    id: 4,
    year: 2022,
    topic: "Code-A-Thon",
    description:
      "Secured second place in Code-A-Thon, a coding event coductuded by Sri Ramakrishna Engineering College, Coimbatore",
  },
  {
    id: 5,
    year: 2022,
    topic: "Bootcamp",
    description:
      "Part of Bootcamp training program, Predominantly working in Java",
  },
  {
    id: 6,
    year: 2022,
    topic: "Portfolio",
    description: "Developed a portfolio using HTML,CSS",
  },
  {
    id: 7,
    year: 2021,
    topic: "Parking Management",
    description: "Developed Parking Management System using doubly linked list",
  },
  {
    id: 8,
    year: 2020,
    topic: "Sri Krishna College of Technology | BE(CSE)",
    description:
      "Scored 89.84% in the HSC examination conducted by the State Board",
  },
  {
    id: 9,
    year: 2020,
    topic: "HandCricket",
    description:
      "Developed an android application to play HandCricket using Android Studio(Java,XML)",
  },
  {
    id: 10,
    year: 2020,
    topic: "HSC | SRK Matric Hr Sec School | Salem, Tamil Nadu",
    description:
      "Scored 89.84% in the HSC examination conducted by the State Board",
  },
  {
    id: 11,
    year: 2019,
    topic: "LiFi-Project",
    description:
      "Project on transmitting and reciving data between devices with light",
  },
  {
    id: 12,
    year: 2018,
    topic: "SSLC | SRK Matric Hr Sec School | Salem, Tamil Nadu",
    description:
      "Scored 92.2% in the SSLC examination conducted by the State Board",
  },
];
function TimeLine() {
  return (
    <section class="timeline-section">
      <div class="timeline-items">
        {items.map((item) => (
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">{item.year}</div>
            <div class="timeline-content">
              <h3>{item.topic}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimeLine;
