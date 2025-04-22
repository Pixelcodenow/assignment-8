import './App.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
// React Router এর প্রয়োজনীয় কম্পোনেন্ট ইম্পোর্ট করা
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MyBookings from './components/pages/MyBookings';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';

function App() {
  return (
    // পুরো অ্যাপ্লিকেশনকে Router দিয়ে র‍্যাপ করা
    <Router>
      {/* ফ্লেক্সিবল লেআউটের জন্য ফ্লেক্স কন্টেইনার */}
      <div className="flex flex-col min-h-screen">
        {/* ন্যাভবার সব পেজে দেখাবে */}
        <NavBar />
        
        {/* মেইন কন্টেন্ট এরিয়া যেটা পেজ অনুযায়ী পরিবর্তন হবে */}
        <div className="flex-grow">
          {/* রাউট ডিফাইন করার জায়গা */}
          <Routes>
            {/* হোম পেজের রাউট - URL এ '/' এলে Home কম্পোনেন্ট দেখাবে */}
            <Route path="/" element={<Home />} />
            {/* মাই বুকিংস পেজের রাউট */}
            <Route path="/my-bookings" element={<MyBookings />} />
            {/* ব্লগস পেজের রাউট */}
            <Route path="/blogs" element={<Blogs />} />
            {/* কন্টাক্ট পেজের রাউট */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        {/* ফুটার সব পেজে দেখাবে */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;