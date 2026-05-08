import Navbar from './components/Nabvar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Storyline from './components/Storyline';
import ForParents from './components/ForParents';
import ForSchools from './components/ForSchools';
import Itinerary from './components/Itinerary';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import PastEvents from './components/PastEvents';
import Sponsors from './components/Sponsors';
// import Students from './components/Students';


function App() {
  return (
    <div className=' flex flex-col items-center ' >
      <Navbar />
      <Hero />
      <Journey />
      <Sponsors/>
      <Storyline />
      <ForParents />
      <ForSchools />
      {/* <Students/> */}
      <Itinerary />
      <EventDetails />
      <PastEvents />
      <Footer />
    </div>
  );
}

export default App;