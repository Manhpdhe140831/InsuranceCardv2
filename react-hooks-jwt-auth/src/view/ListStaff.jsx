import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import '../style/listStaff.scss';
import Staff from './Staff';
import { BsSearch } from 'react-icons/bs';
import EditListStaff from './EditListStaff';
// import staffApi from '../api/postApi';
// import Staff from './Staff';
ListStaff.propTypes = {
  data: PropTypes.array,
};

ListStaff.defaultProps = {
  data: [
    {
      id: 1,
      name: 'NamBD',
      gender: 'MALE',
      folk: 'folk',
      birthday: '29/12/2002',
      email: 'namngu213@gmail.com',
      phone: '123456789',
      country: 'cho hoa lac',
      city: 'cho hoa lac',
      district: 'cho hoa lac',
      street: 'cho hoa lac',
    },
    {
      id: 2,
      name: 'PhongAnlon',
      gender: 'FEMALE',
      folk: 'folk',
      birthday: '29/12/2002',
      email: 'namngu213@gmail.com',
      phone: '123456789',
      country: 'cho hoa lac',
      city: 'cho hoa lac',
      district: 'cho hoa lac',
      street: 'cho hoa lac',
    },
  ],
};

function ListStaff({ data }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = data;
  const handleSearch = () => {
    setSearchList(
      listData.filter((staff) =>
        staff.name.toLowerCase().includes(searchStr.toLowerCase())
      )
    );
  };

  const [isShow, setIsShow] = useState(false);
  const [staffTemp, setStaffTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
  };

  return (
    <React.Fragment>
      <div className="container_liststaff">
        <div className="container-search_liststaff">
          <div className="main_search">
            <input
              className="input_liststaff"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />{' '}
            <button className="button-search_liststaff" onClick={handleSearch}>
              <BsSearch style={{ color: 'white' }} size={20} />
            </button>
          </div>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>FOLK</th>
              <th>BIRTHDAY</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((staff) => (
              <Staff
                key={staff.id}
                staff={staff}
                setIsShow={setIsShow}
                setStaffTemp={setStaffTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditListStaff
                staff={staffTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListStaff;
