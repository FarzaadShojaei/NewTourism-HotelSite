import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNavigator = ({ current }) => {
  const navigate = useNavigate();

  const pages = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'destinations', path: '/destinations', label: 'Destinations' },
    { id: 'hotels', path: '/hotels', label: 'Hotels' },
    { id: 'packages', path: '/packages', label: 'Tour Packages' },
    { id: 'contact', path: '/contact', label: 'Contact & Support' },
  ];

  return (
    <div
      className={`te-page-nav te-page-nav--${current}`}
      id={`te-page-nav-${current}`}
    >
      {pages
        .filter((page) => page.id !== current)
        .map((page) => (
          <button
            key={page.id}
            id={`btn-${current}-to-${page.id}`}
            className={`te-btn te-btn--nav te-btn--${current}-to-${page.id}`}
            onClick={() => navigate(page.path)}
          >
            Go to {page.label}
          </button>
        ))}
    </div>
  );
};

export default PageNavigator;


