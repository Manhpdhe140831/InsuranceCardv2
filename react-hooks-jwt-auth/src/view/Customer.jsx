import PropTypes from 'prop-types';
import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
Customer.propTypes = {
  customer: PropTypes.object,
};

function Customer({ customer, setIsShow, setIsShowContract, setCustomerTemp }) {
  const handleEditIsShow = () => {
    setIsShow(true);
    setCustomerTemp(customer);
  };
  const handleEditIsShowContract = () => {
    setIsShowContract(true);
    setCustomerTemp(customer);
  };

  return (
    <>
      <tr>
        <td>{customer.id}</td>
        <td>{customer.name} </td>

        <td>{customer.gender}</td>
        <td>{customer.folk}</td>
        <td>{customer.birthday}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>
          {customer.address}
        </td>
        <td>
          <AiOutlineMenu
            onClick={() => handleEditIsShowContract()}
            size={20}
            style={{ cursor: 'pointer' }}
          />
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

export default Customer;
