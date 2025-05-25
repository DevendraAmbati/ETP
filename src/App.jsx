import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
