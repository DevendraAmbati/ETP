import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))

function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
        </Suspense>
      <Footer/>
    </Router>
  )
}

export default App
