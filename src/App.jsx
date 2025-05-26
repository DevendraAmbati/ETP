import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Footer from './components/footer/Footer';
import ScrollToTop from './pages/scrolltotop/ScrollToTop'
import LoadingSpinner from './components/loading/LoadingSpinner';
import Header from './components/header/Header';

const Blog = lazy(() => import('./pages/blogs/Blog'));
const BlogDetails = lazy(() => import('./pages/blogdetails/BlogDetails'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  )
}

export default App
