import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Desktop Navigation Link Component
const NavLink = ({ href, text, isActive }) => (
  <a
    href={href}
    className={`group relative px-4 py-2 transition-colors duration-300
      ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
  >
    <span>{text}</span>
    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300
      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
    </span>
  </a>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

NavLink.defaultProps = {
  isActive: false
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, text, isActive }) => (
  <a
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
      ${isActive 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
  >
    {text}
  </a>
);

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

MobileNavLink.defaultProps = {
  isActive: false
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}
        ${isMenuOpen ? 'bg-white' : ''}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-black-600 hover:text-gray-700 transition-colors">
                Blog
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLink href="/" text="How We Work" />
              <NavLink href="/guides" text="DIY Opt-Out Guides" />
              <NavLink href="/business" text="Business" />
              <NavLink href="/blog" text="Blog" isActive />
              <NavLink href="/about" text="About Us" />
              <NavLink href="/support" text="Support" />
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium 
                hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 
                  hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 
                  focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <MobileNavLink href="/" text="How We Work" />
            <MobileNavLink href="/guides" text="DIY Opt-Out Guides" />
            <MobileNavLink href="/business" text="Business" />
            <MobileNavLink href="/blog" text="Blog" isActive />
            <MobileNavLink href="/about" text="About Us" />
            <MobileNavLink href="/support" text="Support" />
            
            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full text-center mb-2 px-4 py-2 text-gray-600 hover:text-gray-900 
                font-medium transition-colors rounded-md hover:bg-gray-100">
                Login
              </button>
              <button className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md 
                font-medium hover:bg-blue-700 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;