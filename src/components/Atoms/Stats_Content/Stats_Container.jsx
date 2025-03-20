import React from 'react';
import { useSelector } from 'react-redux';
// import {memoizedSelectStats} from '../../selectors';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import Pagination from '../Pagination/pagination_component.jsx';

const Stats_Container = ({ SC_Style = {}, children }) => {
  const stats = useSelector(state => state.stats || []); // Get stats from Redux state

  // Define default styles for the stats container
  const defaultStyle = {
    position: 'absolute',
    bottom: '7vh',
    right: '0vw',
    width: 'calc(50vw - 10vw)',
    height: '47.1vh',
    border: '2px solid black',
    padding: '1vw',
    boxShadow: '10px 15px 5px rgba(211, 211, 211, 0.6)',
    backgroundColor: '#fff',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  };

  // Merge default styles with any custom styles passed from the parent
  const combinedStyle = { ...defaultStyle, ...SC_Style };

  return (
    <div className="stats-box" style={combinedStyle}>
    <ul style={{ listStyle: 'none', padding: '0', margin: '0', width: '100%' }}>
       
      </ul>
      {/* Render any nested children passed to the component */}
      {children}
      
    </div>
  );
};

export default Stats_Container;