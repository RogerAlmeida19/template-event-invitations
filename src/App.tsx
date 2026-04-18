import EventHero from './components/EventHero'
import CoupleStory from './components/CoupleStory'
import EventProgram from './components/EventProgram'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen">
      <EventHero />
      <CoupleStory />
      <EventProgram />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
