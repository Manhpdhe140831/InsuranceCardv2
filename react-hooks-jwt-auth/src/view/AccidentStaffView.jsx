import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
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
        <td>
          <BsFillPencilFill
            onClick={() => handleEditIsShow()}
            size={15}
            style={{ marginLeft: '5px', cursor: 'pointer' }}
          />
          <BsFillTrashFill
            size={15}
            style={{ marginLeft: '5px', cursor: 'pointer' }}
          />
        </td>
      </tr>
    </>
  );
}

export default Accident;
