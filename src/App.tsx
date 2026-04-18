import EventHero from './components/EventHero'
import CoupleStory from './components/CoupleStory'
import EventProgram from './components/EventProgram'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import { PageSlider } from './components/PageSlider'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import fairytaleForest from './assets/bg/juliush-fairytale-forest-7759927_1920.jpg';
const backgrounds = [
  fairytaleForest,
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
];

function App() {
  const [page, setPage] = useState(0);
  const slides = [
    <EventHero key="hero" />, <CoupleStory key="story" />, <EventProgram key="program" />, <Gallery key="gallery" />, <RSVP key="rsvp" />, <Footer key="footer" />
  ];
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${backgrounds[page]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%',
            height: '100%'
          }}
        />
      </AnimatePresence>
      <div className="bg-overlay" />
      <PageSlider page={page} setPage={setPage}>
        {slides}
      </PageSlider>
    </div>
  )
}

export default App
