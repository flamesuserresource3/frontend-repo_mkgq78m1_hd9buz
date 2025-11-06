import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AnalyticsPreview from './components/AnalyticsPreview';
import JournalCTA from './components/JournalCTA';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Flux Journal. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
          <a href="#" className="hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AnalyticsPreview />
        <JournalCTA />
      </main>
      <Footer />
    </div>
  );
}
