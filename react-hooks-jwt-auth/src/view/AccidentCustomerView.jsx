import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
Accident.propTypes = {
    accident: PropTypes.object,
};

function Accident({ accident, setIsShow, setAccidentTemp }) {
  const handleEditIsShow = () => {
    setIsShow(true);
    setAccidentTemp(accident);
  };


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

export default Accident;
