import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tom's Health. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy" className="text-sm hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="mt-4">
          <a href="https://www.linkedin.com" className="text-sm hover:underline mr-4">
            LinkedIn
          </a>
          <a href="https://www.twitter.com" className="text-sm hover:underline mr-4">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="text-sm hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
