// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/main.css';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sign In', path: '/signin' },
    { name: 'Sign Up', path: '/signup' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">MotionUI</Link>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;