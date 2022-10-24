import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
Contract.propTypes = {
  customer: PropTypes.object,
};

function Contract({ contract, setIsShow, setCustomerTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setCustomerTemp(contract);
  };

  return (
    <>
      <tr>
        <td>{contract.customerName}</td>
        <td>{contract.contractCode} </td>
        <td>{contract.startDate}</td>
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
