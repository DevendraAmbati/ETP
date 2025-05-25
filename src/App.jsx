import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  )
}

export default App
