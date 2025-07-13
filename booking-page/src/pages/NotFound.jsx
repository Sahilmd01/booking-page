import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4 text-center">
      {/* Tooth Illustration */}
      <div className="relative mb-8">
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="2"
          className="drop-shadow-md"
        >
          <path d="M12 2C6 2 4 6 4 9c0 2 1 3 1 3h14s1-1 1-3c0-3-2-7-8-7z" />
          <path d="M5 12s0 4 7 4 7-4 7-4" />
          <path d="M12 16v3" />
        </svg>
        
        {/* Construction Hat */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <svg 
            width="60" 
            height="30" 
            viewBox="0 0 60 30"
            fill="#f97316"
          >
            <path d="M10 20 L30 5 L50 20 L50 25 L30 10 L10 25 Z" />
            <rect x="25" y="5" width="10" height="5" fill="#fff" />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Our Dental Website is Under Construction
      </h1>
      
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        We're working hard to improve your online experience. 
        Please check back soon for our new and improved dental practice website.
      </p>
      
      <div className="flex items-center justify-center mb-8">
        <div className="h-2 bg-gray-200 rounded-full w-64 overflow-hidden">
          <div 
            className="h-full bg-blue-400 rounded-full animate-progress"
            style={{ 
              width: '60%',
              animation: 'progress 2s ease-in-out infinite alternate'
            }}
          ></div>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Return Home
      </Link>

      <div className="mt-12 pt-6 border-t border-gray-200 w-full max-w-xs">
        <p className="text-sm text-gray-500">
          Need immediate assistance? Call us at <br />
          <a href="tel:+918951146370" className="font-medium text-blue-600 hover:text-blue-800">
            (+91) 89511 46370
          </a>
        </p>
      </div>

      {/* CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 60%; }
          100% { width: 70%; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;