import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contract from './Contract';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import '../style/listContractCustomer.scss';
ListContractCustomer.propTypes = {
  data: PropTypes.array,
};

ListContractCustomer.defaultProps = {
  data: [
    {
      contractCode: '321asd',
      customerName: 'Nam',
      startDate: '29/12/2002',
      endDate: '31/12/2002',
    },
    {
      contractCode: '32xxxxsd',
      customerName: 'Nam',
      startDate: '1/12/2022',
      endDate: '2/12/2022',
    },
  ],
};
function ListContractCustomer({ data, handleCloseModal }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = data;
  const handleSearch = () => {
    setSearchList(
      listData.filter((contract) =>
        contract.contractCode.toLowerCase().includes(searchStr.toLowerCase())
      )
    );
  };

  return (
    <React.Fragment>
      <div className="container_listcontract">
        <div className="container-border">
          <div className="icon-close" onClick={handleCloseModal}>
            <GrClose size={34} />
          </div>
          <div className="container-search_listcontract">
            <h3>customerName</h3>
            <div className="main_search">
              <input
                className="input_liststaff"
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
              />{' '}
              <button
                className="button-search_liststaff"
                onClick={handleSearch}
              >
                <BsSearch style={{ color: 'white' }} size={20} />
              </button>
            </div>
          </div>
          <table className="content-table">
            <thead>
              <tr>
                <th>CODE</th>
                <th>NAME</th>
                <th>START DATE</th>
                <th>END DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {searchList.map((contract) => (
                <Contract
                  key={contract.contractCode}
                  contract={contract}
                  // setIsShow={setIsShow}
                  // setCustomerTemp={setCustomerTemp}
                />
              ))}
            </tbody>
          </table>
          {/* style={isShow?{display:"flex"}:{display:"none"}} */}
          {/* {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditListCustomer
                customer={customerTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )} */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListContractCustomer;
