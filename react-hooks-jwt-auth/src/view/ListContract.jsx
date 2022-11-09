import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Contract from './Contract';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import '../style/listStaff.scss';
import ContractService from "../services/contractService";
ListContract.propTypes = {
  data: PropTypes.array,
};

ListContract.defaultProps = {
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
function ListContract({ data, handleCloseModal }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    ContractService.getContractByAdmin().then(
      (response) => {
        setContent(response.data)
      }
    )

  }, []);
  console.log(content)
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
        {/* <a className="button-create-contract" href="">Create New Contract</a> */}
        <div className="container-search_liststaff">
            <button className='button-create'>Create New Contract</button>
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
    </React.Fragment>
  );
}

export default ListContract;
