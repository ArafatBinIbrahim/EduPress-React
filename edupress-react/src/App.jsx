import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// কম্পোনেন্ট ও পেজগুলো সঠিকভাবে ইম্পোর্ট করা হলো
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        {/* হেডার সব পেজেই কমন থাকবে */}
        <Header />

        {/* রাউটিং */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* ফুটার সব পেজেই কমন থাকবে */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;