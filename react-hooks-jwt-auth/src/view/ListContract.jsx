import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Contract from './Contract';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import '../style/listStaff.scss';
import ContractService from "../services/contractService";
import CreateContract from "./CreateContract";
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
  const [content, setContent] = useState(data);
  useEffect(() => {
    ContractService.getContractByAdmin().then(
      (response) => {
        setContent(response.data)
      }
    )

  }, []);
  console.log(content)
  const [newContract, setNewContract] = useState(false)  

  return (
    <React.Fragment>

      <div className="container_listcontract">
        {/* <a className="button-create-contract" href="">Create New Contract</a> */}
        <div className="container-search_liststaff">
          <button className='button-create' onClick={() => { setNewContract(true) }}>Create New Contract</button>          
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
            {content.map((contract) => (
              <Contract
                key={contract.contractCode}
                contract={contract}
              // setIsShow={setIsShow}
              // setCustomerTemp={setCustomerTemp}
              />
            ))}
          </tbody>
        </table>
      </div>
      {newContract && <CreateContract setNewContract={setNewContract} />}
    </React.Fragment>
  );
}

export default ListContract;
