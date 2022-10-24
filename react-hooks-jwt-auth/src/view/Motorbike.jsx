import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
Motorbike.propTypes = {};

function Motorbike({ motorbike, setIsShow, setMotorbikeTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setMotorbikeTemp(motorbike);
  };
  return (
    <tr>
      <td>{motorbike.id}</td>
      <td>{motorbike.licensePlates}</td>
      <td>{motorbike.customerName}</td>
      <td>
        <img
          className="img-motorbike"
          src="https://i.kym-cdn.com/entries/icons/original/000/037/349/Screenshot_14.jpg"
        />
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

export default Motorbike;
