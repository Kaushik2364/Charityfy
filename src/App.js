import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Causes from './components/Causes';
import Events from './components/Events';
import Pages from './components/Page';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Donate from './components/Donate';
import JoinNow from './components/JoinNow';
import MakeDonation from './components/MakeDonation';
import Fundraising from './components/Fundraising';
import BecomeVolunteer from './components/BecomeVolunteer';

function AppWrapper() {
  const location = useLocation();
  const isIntroPage = location.pathname === '/';

  return (
    <>
      {!isIntroPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/MakeDonation" element={<MakeDonation/>}/>
        <Route path="/Fundraising" element={<Fundraising/>}/>
        <Route path="/BecomeVolunteer" element={<BecomeVolunteer/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

