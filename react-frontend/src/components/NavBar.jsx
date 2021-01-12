import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ title, icon }) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md">
          <div>
            <Link to="/" className="text-white">
              <i className={icon} /> {title}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Employee Management App',
  icon: 'fas fa-address-card',
};

export default NavBar;
