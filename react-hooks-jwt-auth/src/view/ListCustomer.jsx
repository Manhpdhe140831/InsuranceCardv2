import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import UserService from "../services/user.service";
import '../style/editListStaff.scss';
import '../style/listContractCustomer.scss';
import CreateUser from './CreateUser';
import Customer from './Customer';
import EditListCustomer from './EditListStaff';
import ListContractCustomer from './ListContractCustomer';
import '../style/listStaff.scss';

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
  const [content, setContent] = useState(data);
  useEffect(() => {
    UserService.getAllUser().then(
      (response) => {
        setContent(response.data)
      }
    )

  }, []);
  console.log(content);

  const [isShow, setIsShow] = useState(false);
  const [isShowContract, setIsShowContract] = useState(false);
  const [customerTemp, setCustomerTemp] = useState(null);
  const [createUser, setCreateUser] = useState(false);

  const handleCloseModal = () => {
    setIsShow(false);
    setIsShowContract(false);
  };

  return (
    <React.Fragment>
      <div className="container_liststaff">
        <div className="container-search_liststaff">
          <button className="button-create"
            onClick={() => { setCreateUser(true) }}>
            Create Customer
          </button>         
        </div>
        <div className='tableContainer'>
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
        </div>
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
        {createUser && <CreateUser setCreateUser={setCreateUser} />}
      </div>
    </React.Fragment>
  );
}

export default ListCustomer;
