import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FunctionComponent = () => {
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<number>(0);

  return (
    <Router>
      <Toaster toastOptions={{ style: { background: '#222', borderRadius: '8px', color: '#FFFFFF', fontSize: '14px' } }} />

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={<Home setSelectedServiceDetail={setSelectedServiceDetail} />} />
        <Route path='/about' element={<About setSelectedServiceDetail={setSelectedServiceDetail} />} />
        <Route path='/services' element={<Services selectedServiceDetail={selectedServiceDetail} setSelectedServiceDetail={setSelectedServiceDetail} />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Footer setSelectedServiceDetail={setSelectedServiceDetail} />
    </Router>
  )
}

export default App;