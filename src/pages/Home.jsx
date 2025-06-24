// src/pages/Home.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/main.css';

ChartJS.register(...registerables);

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data for items with images
  const allItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100),
    image: `https://picsum.photos/200/200?random=${i}`,
    category: ['electronics', 'clothing', 'books'][Math.floor(Math.random() * 3)]
  }));

  // Chart data
  const chartData = {
    bar: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales 2023',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }]
    },
    line: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Users',
        data: [100, 150, 200, 250, 300, 350],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      }]
    },
    pie: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
        data: [60, 30, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      }]
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`home ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Charts Section - Now with 3 charts */}
      <motion.section 
        className="charts-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Data Visualization</h2>
        <div className="charts-container">
          <ErrorBoundary>
            <div className="chart">
              <Chart type="bar" data={chartData.bar} />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="chart">
              <Chart type="line" data={chartData.line} />
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="chart">
              <Chart type="pie" data={chartData.pie} />
            </div>
          </ErrorBoundary>
        </div>
      </motion.section>

      {/* Paginated Items with Images */}
      <motion.section 
        className="pagination-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Our Products</h2>
        <div className="items-list">
          {currentItems.map(item => (
            <motion.div 
              key={item.id}
              className="item-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="item-image"
              />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.value}</p>
                <span className={`category ${item.category}`}>
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={allItems.length}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      </motion.section>
    </div>
  );
};

export default Home;