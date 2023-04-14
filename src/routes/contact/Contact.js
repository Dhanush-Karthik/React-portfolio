import "./ContactStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  let [userName, setName] = useState("");
  let [userEmail, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdsbx7o",
        "template_h4kp2oj",
        form.current,
        "sXzXOfh4DVKMQCbDb"
      )
      .then(
        (result) => {
          alert("Mail sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "#00ffff" }}
              />
              <div className="topic">Address</div>
              <div className="text-one">
                72/62 Devangar Pillayar Koil Street
              </div>
              <div className="text-two">Shevapet,Salem-636002</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#00ffff" }} />
              <div className="topic">Phone</div>
              <div className="text-one">+91 99428 31878</div>
            </div>
            <div className="userEmail details">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "00fffff" }} />
              <div className="topic">Email</div>
              <div className="text-one">dhanushkarthik8@gmail.com</div>
            </div>
          </div>
          <div style={{ border: "2px solid #00ffff", height: "325px" }}></div>
          <div className="right-side">
            <div className="topic-text">Send me a message</div>
            <form ref={form} action="#" onSubmit={sendEmail}>
              <div className="input-box">
                <input
                  type="text"
                  name="user-name"
                  value={userName}
                  onChange={handleNameChange}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="user-email"
                  value={userEmail}
                  onChange={handleEmailChange}
                  placeholder="Enter your Email"
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  value={message}
                  name="message"
                  onChange={handleMessageChange}
                  placeholder="Leave your message"
                />
              </div>
              <div className="button">
                <input
                  type="button"
                  value="Send Now"
                  style={{ color: "#1b1b1b" }}
                  onClick={sendEmail}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
