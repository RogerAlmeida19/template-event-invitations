import { useState, Suspense, lazy } from "react";
const EventHero = lazy(() => import("./components/EventHero"));
const CoupleStory = lazy(() => import("./components/CoupleStory"));
const ProgramTimeline = lazy(() => import("./components/ProgramTimeline"));
const Footer = lazy(() => import("./components/Footer"));
import RSVP from "./components/RSVP";
import { PageSlider } from "./components/PageSlider";
import { AnimatePresence, motion } from "framer-motion";

const backgrounds = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  // Puedes agregar más fondos para cada página
];

function App() {
  // 0: Hero, 1: Story, 2: Program, 3: Footer
  const [page, setPage] = useState(0);
  const [showRSVP, setShowRSVP] = useState(false);
  const [sliderLocked] = useState(false);

  const slides = [
    <Suspense
      key="hero"
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Cargando...
        </div>
      }
    >
      <EventHero />
    </Suspense>,
    <Suspense
      key="story"
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Cargando...
        </div>
      }
    >
      <CoupleStory />
    </Suspense>,
    <Suspense
      key="program"
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Cargando...
        </div>
      }
    >
      <ProgramTimeline onShowRSVP={() => setShowRSVP(true)} />
    </Suspense>,
    <Suspense
      key="footer"
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Cargando...
        </div>
      }
    >
      <Footer />
    </Suspense>,
  ];

  // El fondo debe coincidir con la página
  const bgIndex = page;

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={showRSVP ? "rsvp" : page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${backgrounds[bgIndex % backgrounds.length]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            width: "100%",
            height: "100%",
          }}
        />
      </AnimatePresence>
      <div className="bg-overlay" />
      {showRSVP ? (
        <>
          <button
            className="fixed top-6 left-6 bg-white/80 hover:bg-white text-emerald-700 font-bold px-4 py-2 rounded shadow z-50"
            onClick={() => setShowRSVP(false)}
          >
            Volver
          </button>
          <RSVP />
        </>
      ) : (
        <PageSlider page={page} setPage={setPage} sliderLocked={sliderLocked}>
          {slides}
        </PageSlider>
      )}
      {/* Indicador de navegación entre páginas */}
      {!showRSVP && page < slides.length - 1 && (
        <motion.div
          className="fixed right-4 bottom-8 flex flex-col items-center gap-1 z-[100] pointer-events-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
          </svg>
        </motion.div>
      )}
    </div>
  );
}

export default App;
