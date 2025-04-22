import React from 'react';
// React Router এর Link কম্পোনেন্ট ইম্পোর্ট করা
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-gray-100 shadow-sm">
            <div className="navbar-start">
                {/* মোবাইল ড্রপডাউন মেনু */}
                <div className="dropdown">
                    {/* মোবাইল মেনু বাটন */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* মোবাইল মেনু আইটেম */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* সাধারণ <a> ট্যাগের বদলে <Link> ব্যবহার করা */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/my-bookings">My-Bookings</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/* লোগো এবং ব্র্যান্ড নাম */}
                <div className="flex items-center btn btn-ghost gap-2">
                    <img src="https://i.ibb.co.com/b5SyYFqt/logo.png" alt="logo" className="h-8" />
                    {/* হোম পেজে লিঙ্ক */}
                    <Link to="/" className="text-xl">Phudu</Link>
                </div>
            </div>

            {/* ডেস্কটপ মেনু */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-bookings">My-Bookings</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            {/* ইমারজেন্সি বাটন */}
            <div className="navbar-end">
                <Link to="/emergency" className="btn btn-outline btn-primary rounded-3xl">Emergency</Link>
            </div>
        </div>
    );
};

export default NavBar;