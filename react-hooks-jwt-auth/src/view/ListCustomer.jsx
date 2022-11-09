import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Customer from './Customer';
import EditListCustomer from './EditListCustomer';
import ListContractCustomer from './ListContractCustomer';
import '../style/listContractCustomer.scss';
import '../style/editListStaff.scss';
import UserService from "../services/user.service";

ListCustomer.propTypes = {
  data: PropTypes.array,
};

ListCustomer.defaultProps = {
  data: [
    {
      id: 1,
      name: ' NamBD',
      gender: 'MALE',
      folk: ' folk',
      birthday: ' 29/12/2002',
      email: ' namngu213@gmail.com',
      phone: ' 123456789',
      address: 'dhjbdgydsagyuasdgyuasdgyi'
    },
    {
      id: 2,
      name: ' PhongAnlon',
      gender: ' FEMALE',
      folk: ' folk',
      birthday: ' 29/12/2002',
      email: ' namngu213@gmail.com',
      phone: ' 123456789',
      address: 'dhjbdgydsagyuasdgyuasdgyi'
    },
  ],
};
function ListCustomer({ data }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getAllUser().then(
      (response) => {
        setContent(response.data)
      }
    )

  }, []);
  console.log(content)
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = content;
  // const handleSearch = () => {
  //   setSearchList(
  //     content.filter((customer) =>
  //       customer.name.toLowerCase().includes(searchStr.toLowerCase())
  //     )
  //   );
  // };
  console.log(searchList)
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
            <button className="button-search_liststaff"
            //  onClick={handleSearch}
             >
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
            {content.map((customer) => (
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
