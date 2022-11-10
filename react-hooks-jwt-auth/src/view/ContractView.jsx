import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import AuthService from "../services/auth.service";

Contract.propTypes = {
  customer: PropTypes.object,
};

function Contract({ contract, setIsShow, setContractTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setContractTemp(contract);
  };

  const [IsAdmin, setIsAdmin] = useState(false);
  const [IsStaff, setIsStaff] = useState(false);
  const [IsCustomer, setIsCustomer] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setIsAdmin(user.roles.includes("ROLE_ADMIN"));
      setIsStaff(user.roles.includes("ROLE_STAFF"));
      setIsCustomer(user.roles.includes("ROLE_CUSTOMER"));
    }
  }, []);

  return (
    <>
      <tr>
        <td>{contract.code} </td>
        <td>{contract.beginDate}</td>
        <td>{contract.endDate}</td>

        {IsAdmin || IsStaff && (
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
        )}
        {IsCustomer && (
          <td>
            <button>renew</button>
            <button>cancel</button>
          </td>
        )}
      </tr>
    </>
  );
}

export default Contract;
