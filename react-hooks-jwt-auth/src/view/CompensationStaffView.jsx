import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
Accident.propTypes = {
    accident: PropTypes.object,
};

function Accident({ compensation, setIsShow, setCompensationTemp }) {
  const handleEditIsShow = () => {
    setIsShow(true);
    setCompensationTemp(compensation);
  };


  return (
    <>
      <tr>
        <td>{compensation.code}</td>      
        <td>{compensation.description}</td>      
        <td>{compensation.status}</td>      
        <td>{compensation.requestDate}</td>      
        <td>{compensation.requestDate}</td>      
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
