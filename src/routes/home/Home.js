import { Link } from 'react-router-dom';
import Logo from '../../img/profile1.jpg';


function Home() {
  return (
    <>
      <div className="content">
        <img src={Logo} alt="profile" />
        <div className="info">
          <h2>Dhanush Karthik K S</h2>
          <h4>Entry level software engineer </h4>
          <p>
            Entry-level software engineer, predominantly working with Java and a
            self-taught Spring boot developer. Eager to join an enterprise,
            where I can contribute with my technical skillset.
          </p>
          <Link to="/about" className="info-btn">
            More info
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
