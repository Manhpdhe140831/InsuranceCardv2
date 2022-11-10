import PropTypes from 'prop-types';
import React from 'react';
Accident.propTypes = {
    accident: PropTypes.object,
};

function Accident({ compensation }) {

  return (
    <>
      <tr>
        <td>{compensation.code}</td>              
        <td>{compensation.date}</td>              
        <td>{compensation.status}</td>      
      </tr>
    </>
  );
}

export default Accident;
