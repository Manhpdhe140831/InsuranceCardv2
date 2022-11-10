import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContractService from "../services/contractService";
import '../style/listStaff.scss';
import CreateContract from "./CreateContract";
import EditContract from './EditContract';
import ContractView from './ContractView';
ListContractView.propTypes = {
  data: PropTypes.array,
};

ListContractView.defaultProps = {
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
function ListContractView({ data }) {
  const [content, setContent] = useState(data);
  useEffect(() => {
    ContractService.getContractByAdmin().then(
      (response) => {
        setContent(response.data)
      }
    )

  }, []);
  console.log(content)
  const [newContract, setNewContract] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [contractTemp, setContractTemp] = useState(null);
  const handleCloseModal = () => {
    setIsShow(false);
  };

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
              <ContractView
                key={contract.contractCode}
                contract={contract}
                setIsShow={setIsShow}
                setContractTemp={setContractTemp}
              />
            ))}
          </tbody>
        </table>
      </div>
      {newContract && <CreateContract setNewContract={setNewContract} />}
      {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditContract
                contract={contractTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
    </React.Fragment>
  );
}

export default ListContractView;
