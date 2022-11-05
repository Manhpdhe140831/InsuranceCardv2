import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Customer from './Customer';
import EditListCustomer from './EditListCustomer';
import ListContractCustomer from './ListContractCustomer';
import '../style/listStaff.scss';
ListCustomer.propTypes = {
  data: PropTypes.array,
};

ListCustomer.defaultProps = {
  data: [
    {
      id: 1,
      name: 'Customer NamBD',
      gender: 'Customer MALE',
      folk: 'Customer folk',
      birthday: 'Customer 29/12/2002',
      email: 'Customer namngu213@gmail.com',
      phone: 'Customer 123456789',
      country: 'Customer cho hoa lac',
      city: 'Customer cho hoa lac',
      district: 'Customer cho hoa lac',
      street: 'Customer cho hoa lac',
    },
    {
      id: 2,
      name: 'Customer PhongAnlon',
      gender: 'Customer FEMALE',
      folk: 'Customer folk',
      birthday: 'Customer 29/12/2002',
      email: 'Customer namngu213@gmail.com',
      phone: 'Customer 123456789',
      country: 'Customer cho hoa lac',
      city: 'Customer cho hoa lac',
      district: 'Customer cho hoa lac',
      street: 'Customer cho hoa lac',
    },
  ],
};
function ListCustomer({ data }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = data;
  const handleSearch = () => {
    setSearchList(
      listData.filter((customer) =>
        customer.name.toLowerCase().includes(searchStr.toLowerCase())
      )
    );
  };

  const [isShow, setIsShow] = useState(false);
  const [isShowContract, setIsShowContract] = useState(false);
  const [customerTemp, setCustomerTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
    setIsShowContract(false);
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
            {searchList.map((customer) => (
              <Customer
                key={customer.id}
                customer={customer}
                setIsShow={setIsShow}
                setIsShowContract={setIsShowContract}
                setCustomerTemp={setCustomerTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditListCustomer
                customer={customerTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
        {isShowContract && (
          <div className="modalCst">
            <div className="modal-edit">
              <ListContractCustomer
                customer={customerTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ListCustomer;
