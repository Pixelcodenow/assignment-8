import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <div className="flex items-center gap-2">
                <img src="https://i.ibb.co.com/b5SyYFqt/logo.png" alt="logo" className="h-8" />
                <Link to="/" className="text-xl">Phudu</Link>
            </div>

            <nav className="grid grid-flow-col gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-bookings">My-Bookings</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            
            <nav>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <BsFacebook />
                    <FaInstagram />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                    <AiFillTwitterCircle />
                    {/* Gi3DHammer আইকনটি রিমুভ করা হয়েছে */}
                </div>
            </nav>
        </footer>
    );
};

export default Footer;


































































































// import { Gi3DHammer } from "react-icons/gi"; 
// import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa";
// import { BsFacebook } from "react-icons/bs";
// import React from 'react';
// // React Router এর Link কম্পোনেন্ট ইম্পোর্ট করা
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
//             {/* ফুটারের লোগো অংশ */}
//             <div className="flex items-center gap-2">
//                 <img src="https://i.ibb.co.com/b5SyYFqt/logo.png" alt="logo" className="h-8" />
//                 {/* হোম পেজে লিঙ্ক */}
//                 <Link to="/" className="text-xl">Phudu</Link>
//             </div>

//             {/* ফুটার মেনু লিঙ্কস */}
//             <nav className="grid grid-flow-col gap-4">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/my-bookings">My-Bookings</Link></li>
//                     <li><Link to="/blogs">Blogs</Link></li>
//                     <li><Link to="/contact">Contact Us</Link></li>
//                 </ul>
//             </nav>

//             {/* সোশ্যাল মিডিয়া আইকনস */}
//             <nav>
//                 <div className="grid grid-flow-col gap-4 text-3xl">
//                     <BsFacebook />
//                     <FaInstagram />
//                     <AiFillLinkedin />
//                     <AiFillYoutube />
//                     <AiFillTwitterCircle />
//                     <Gi3DHammer />
//                 </div>
//             </nav>
//         </footer>
//     );
// };

// export default Footer;