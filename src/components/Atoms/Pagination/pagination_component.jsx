import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_styles.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, gridPosition }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container" style={{ gridArea: gridPosition, display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
      <button 
        className="btn btn-primary"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index + 1} 
          className={`btn ${currentPage === index + 1 ? 'btn-dark' : 'btn-outline-primary'}`}
          onClick={() => handlePageChange(index + 1)}
          aria-label={`Page ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}

      <button 
        className="btn btn-primary"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  gridPosition: PropTypes.string,
};

Pagination.defaultProps = {
  itemsPerPage: 10,
  currentPage: 1,
  gridPosition: 'auto',
};

export default Pagination;
