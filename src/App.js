import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  const ratio=1.5;
  return (
    <div className="App">
<Header/>
<Home ratio={ratio}/>
<Work/>
<Experience/>
<Services/>
<Testimonials/>
<Contact/>
<Toaster/>
<Footer/>
    </div>
  );
}

export default App;
