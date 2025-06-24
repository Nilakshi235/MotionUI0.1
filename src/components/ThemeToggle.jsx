// src/components/ThemeToggle/ThemeToggle.jsx
import { motion } from 'framer-motion';
import '../styles/main.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.div 
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </motion.div>
  );
};

export default ThemeToggle;