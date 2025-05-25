import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Blog />} />
        
      </Routes>
    </Router>
  )
}

export default App
