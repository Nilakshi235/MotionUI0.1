// src/components/Pagination/Pagination.jsx
import { motion } from 'framer-motion';
import '../styles/main.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {currentPage > 1 && (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(currentPage - 1)}
          >
            &laquo;
          </motion.li>
        )}

        {pageNumbers.map(number => (
          <motion.li
            key={number}
            className={currentPage === number ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(number)}
          >
            {number}
          </motion.li>
        ))}

        {currentPage < totalPages && (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(currentPage + 1)}
          >
            &raquo;
          </motion.li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;