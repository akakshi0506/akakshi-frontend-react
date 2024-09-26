import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#022549] text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

                    {/* Branding/Logo and Description */}
                    <div className="flex flex-col">
                        <img src="/path-to-your-logo.png" alt="Your Logo" className="w-32" />
                        <p className="mt-4 text-sm">
                        Om Sarve Bhavantu Sukhinah...
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-8 text-sm">
                        <a href="/about" className="hover:text-white no-underline font-light">About</a>
                        <a href="/services" className="hover:text-white no-underline font-light">Services</a>
                        <a href="/careers" className="hover:text-white no-underline font-light">Careers</a>
                        <a href="/contactus" className="hover:text-white no-underline font-light">Contact Us</a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.406.594 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.892-4.788 4.656-4.788 1.324 0 2.462.099 2.794.143v3.24l-1.918.001c-1.503 0-1.794.714-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.117C23.406 24 24 23.406 24 22.675V1.324C24 .593 23.406 0 22.675 0z" /></svg>
                        </a>
                        <a href="https://twitter.com" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.566-2.005.978-3.127 1.2A4.92 4.92 0 0016.616 3a4.923 4.923 0 00-4.92 4.92c0 .385.043.76.127 1.122A13.978 13.978 0 011.671 3.149a4.924 4.924 0 001.524 6.574A4.897 4.897 0 01.964 9.259v.063a4.923 4.923 0 003.95 4.827 4.904 4.904 0 01-2.212.085 4.924 4.924 0 004.6 3.417A9.866 9.866 0 010 21.54a13.931 13.931 0 007.548 2.212c9.142 0 14.307-7.575 14.307-14.136 0-.215-.005-.429-.015-.642A10.24 10.24 0 0024 4.557z" /></svg>
                        </a>
                        <a href="https://linkedin.com" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.73V1.73C24 .774 23.208 0 22.23 0zM7.122 20.452H3.563V9.045h3.559v11.407zm-1.779-13.05a2.07 2.07 0 01-2.065-2.065 2.07 2.07 0 112.065 2.065zm15.565 13.05h-3.558v-5.605c0-1.335-.477-2.248-1.672-2.248-.912 0-1.454.611-1.692 1.201-.086.211-.107.507-.107.803v5.849H10.76V9.045h3.414v1.559c.455-.699 1.267-1.697 3.085-1.697 2.251 0 3.943 1.47 3.943 4.633v6.912z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">

                    {/* Newsletter Signup */}
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm">Subscribe to our newsletter</span>
                        <form className="flex">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 text-sm rounded-l-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-500" />
                            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-r-md hover:bg-indigo-500">Subscribe</button>
                        </form>
                    </div>

                    {/* Legal and Copyright Info */}
                    <div className="text-sm mt-8 md:mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms & Conditions</a>
                        <span>&copy; 2024 Your Company. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;