import React from 'react';

const AvailabilityIndicator = ({ isAvailable }) => {
  return (
    <div>
      {isAvailable ? (
        <div style={{ backgroundColor: 'green', width: '50px', height: '50px', borderRadius: '50%', border: '2px solid black' }}></div>
      ) : (
        <div style={{ backgroundColor: 'red', width: '50px', height: '50px', borderRadius: '50%', border: '2px solid black' }}></div>
      )}
    </div>
  );
};

export default AvailabilityIndicator;
