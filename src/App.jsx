import './App.css';
import About from './component/About.jsx';
import Footer from './component/Footer.jsx';
import Navbar from './component/Navbar.jsx';
import NewsPage from './pages/NewsPage.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <About />
      <NewsPage />
      <Footer/>
    </div>
  )
}

export default App
