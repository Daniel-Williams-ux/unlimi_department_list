import React from 'react';
import unlimiLogo from '../assets/unlimi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/profile.jpg';
import SearchBar from './SearchBar'; // Make sure the path is correct

const Header = ({ handleSearch }) => {
  return (
    <header className="flex flex-wrap items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img src={unlimiLogo} alt="Unlimi. Logo" className="w-16 sm:w-24 md:w-32 h-auto" />

        {/* Search Bar */}
        <div className="flex-grow max-w-xs sm:max-w-md">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>

      {/* Right section containing the notification bell, name, profile image, and drop-down arrow */}
      <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
        {/* Notification Bell */}
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg" />
          {/* Red notification dot */}
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Person's Name */}
        <div className="person-name hidden sm:block">
          John Doe {/* Replace with dynamic data or user's name */}
        </div>

        {/* Profile Image */}
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
        </div>

        {/* Drop-down Arrow */}
        <div className="dropdown-arrow hidden sm:block">
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-600 text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;