import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
Contract.propTypes = {
  customer: PropTypes.object,
};

function Contract({ contract, setIsShow, setContractTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setContractTemp(contract);
  };

  return (
    <>
      <tr>
        <td>{contract.code} </td>
        <td>{contract.beginDate}</td>
        <td>{contract.endDate}</td>

        <td>
          <AiFillEye size={18} style={{ cursor: 'pointer' }} />

          
          <BsFillPencilFill
            onClick={() => handleEdit()}
            size={13}
            style={{ marginLeft: '5px', cursor: 'pointer' }}
          />


          <BsFillTrashFill
            size={13}
            style={{ marginLeft: '5px', cursor: 'pointer' }}
          />
        </td>
      </tr>
    </>
  );
}

export default Contract;
