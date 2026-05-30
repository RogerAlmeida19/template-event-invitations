
import { useState, Suspense, lazy, useRef } from 'react';
const EventHero = lazy(() => import('./components/EventHero'));
const CoupleStory = lazy(() => import('./components/CoupleStory'));
const ProgramTimeline = lazy(() => import('./components/ProgramTimeline'));
const Footer = lazy(() => import('./components/Footer'));
const RSVP = lazy(() => import('./components/RSVP'));
import { PageSlider } from './components/PageSlider';
import { AnimatePresence, motion } from 'framer-motion';

const backgrounds = [
	'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
	// Puedes agregar más fondos para cada página
];

function App() {
	// 0: Hero, 1: Story, 2: Program, 3: Footer
	const [page, setPage] = useState(0);
	const [showRSVP, setShowRSVP] = useState(false);
	const rsvpFormRef = useRef<HTMLDivElement>(null);
	const [sliderLocked, setSliderLocked] = useState(false);

	const slides = [
		<Suspense key="hero" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><EventHero /></Suspense>,
		<Suspense key="story" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><CoupleStory /></Suspense>,
		<Suspense key="program" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><ProgramTimeline onShowRSVP={() => setShowRSVP(true)} /></Suspense>,
		<Suspense key="footer" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><Footer /></Suspense>
	];

	// El fondo debe coincidir con la página
	const bgIndex = page;

	return (
		<div className="w-full h-screen relative overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={showRSVP ? 'rsvp' : page}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className="absolute inset-0 -z-10"
					style={{
						backgroundImage: `url(${backgrounds[bgIndex]})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundAttachment: 'fixed',
						width: '100%',
						height: '100%'
					}}
				/>
			</AnimatePresence>
			<div className="bg-overlay" />
			{showRSVP ? (
				<div className="w-full h-full flex flex-col items-center justify-center">
					<button
						className="absolute top-6 left-6 bg-white/80 hover:bg-white text-emerald-700 font-bold px-4 py-2 rounded shadow z-10"
						onClick={() => setShowRSVP(false)}
					>
						Volver
					</button>
					<RSVP />
				</div>
			) : (
				<PageSlider page={page} setPage={setPage} sliderLocked={sliderLocked}>
					{slides}
				</PageSlider>
			)}
		</div>
	);
}



export default App;


