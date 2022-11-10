import PropTypes from 'prop-types';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
Staff.propTypes = {
  staff: PropTypes.object,
};
function Staff({ staff, setIsShow, setStaffTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setStaffTemp(staff);
  };
  return (
    <tr>
      <td>{staff.id}</td>
      <td>{staff.name}</td>
      <td>{staff.gender}</td>
      <td>{staff.folk}</td>
      <td>{staff.birthday}</td>
      <td>{staff.email}</td>
      <td>{staff.phone}</td>
      <td>
        {staff.country}-{staff.city}-{staff.district}-{staff.street}
      </td>
      <td>
        <AiFillEye size={20} style={{ cursor: 'pointer' }} />
        <BsFillPencilFill
          onClick={() => handleEdit()}
          size={15}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
        <BsFillTrashFill
          size={15}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
      </td>
    </tr>
  );
}

export default Staff;
