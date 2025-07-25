import { About, Blogs, Footer, Hero, Logos, Navbar, Pricing } from './components'

function App() {
  return (
    <div className="h-full bg-slate-50min-h-screen bg-slate-50 text-gray-900">
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <Pricing />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
