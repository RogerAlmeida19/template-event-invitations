
import { useState, Suspense, lazy } from 'react';
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
	// 0: Hero, 1: Story, 2: Program, 3: RSVP, 4: Footer
	const [page, setPage] = useState(0);

	// Solo las páginas que van en el slider

	const slides = [
		<Suspense key="hero" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><EventHero /></Suspense>,
		<Suspense key="story" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><CoupleStory /></Suspense>,
		<Suspense key="program" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><ProgramTimeline /></Suspense>,
		<Suspense key="rsvp" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><RSVP /></Suspense>,
		<Suspense key="footer" fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}><Footer /></Suspense>
	];

	// El fondo debe coincidir con la página
	const bgIndex = page;

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
			<PageSlider page={page} setPage={setPage}>
				{slides}
			</PageSlider>
		</div>
	);
}



export default App;


