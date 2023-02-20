import './App.css'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FavFilms from './pages/FavFilms'
import NotFound from './pages/NotFound'
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header"
import FilmDetail from './pages/FilmDetail'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/favfilms' element={<ProtectedRoute><FavFilms/></ProtectedRoute>}/>
          <Route path='/favfilms/:id' element={<FilmDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
