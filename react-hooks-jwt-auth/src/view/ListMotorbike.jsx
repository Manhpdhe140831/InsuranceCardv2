import React, { useState } from 'react';
import '../style/listStaff.scss';
import EditListMotorbike from './EditListMotorbike';
import Motorbike from './Motorbike';
ListMotorbike.propTypes = {};
ListMotorbike.defaultProps = {
  data: [
    {
      id: 1,
      licensePlates: 'NamBD',
      customerName: 'DeoBiet',
      picture: 'namngu213@gmail.com',
    },
    {
      id: 2,
      licensePlates: '2NamBD',
      customerName: '2DeoBiet',
      picture: '2namngu213@gmail.com',
    },
  ],
};

function ListMotorbike({ data }) {
  const [content, setContent] = useState(data);
  const [isShow, setIsShow] = useState(false);
  const [motorbikeTemp, setMotorbikeTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
  };

  return (
    <React.Fragment>
      <div className="container_liststaff">
        <div className="container-search_liststaff">          
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>LICENSE PLATES</th>
              <th>CUSTOMER NAME</th>
              <th>PICTURE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {content.map((motorbike) => (
              <Motorbike
                key={motorbike.id}
                motorbike={motorbike}
                setIsShow={setIsShow}
                setMotorbikeTemp={setMotorbikeTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditListMotorbike
                motorbike={motorbikeTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListMotorbike;
