import NavBar from './components/navbar/NavBar';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Projects from './routes/projects/Projects';
import TimeLine from './routes/timeline/TimeLine';
import Contact from './routes/contact/Contact';
import FootBar from './components/footbar/FootBar';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FootBar />
    </>
  );
}

export default App;
