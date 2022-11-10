import PropTypes from 'prop-types';
import React from 'react';
AccidentH.propTypes = {
    accident: PropTypes.object,
};

function AccidentH({ accident}) {
  return (
    <>
      <tr>
        <td>{accident.code}</td>      
        <td>{accident.date}</td>      
        <td>{accident.description}</td>             
      </tr>
    </>
  );
}

export default AccidentH;
