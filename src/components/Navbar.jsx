import React from "react";
import ATLogo from '/src/assets/ATLogo.png';

function Navbar() {
    return (
        <div className="navbar-container fixed top-0 left-0 w-full bg-[#1b2a41] p-4 shadow-md z-10 mb-10">
            <div className="navbar-width flex justify-between items-center max-w-screen-xl mx-auto">
                {/* Left Navbar */}
                <div className="left-navbar flex gap-8">
                    <a href="/exercises" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">Exercises</a>
                    <a href="/workouts" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">Workouts</a>
                    <a href="/programbuilder" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">Program Builder</a>
                </div>

                {/* Logo */}
                <div className="navbar-logo-container">
                    <a href="/home">
                        <img src={ATLogo} alt="Logo" className="navbar-logo h-24 w-auto" />
                    </a>
                </div>

                {/* Right Navbar */}
                <div className="right-navbar flex gap-8">
                    <a href="/userprofile" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">User Profile</a>
                    <a href="/pricing" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">Pricing</a>
                    <a href="/settings" className="text-white text-xl hover:text-[#13a89e] transition-colors duration-300">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
