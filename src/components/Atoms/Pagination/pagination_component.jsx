import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index + 1} 
          onClick={() => onPageChange(index + 1)}
          style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
        >
          {index + 1}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;