import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Resources from './pages/Resources';
import Services from './pages/Services';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App margin">
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/resources' element={ <Resources /> } />
          <Route path='/services' element={ <Services /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;