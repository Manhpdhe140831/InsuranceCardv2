import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContractService from "../services/contractService";
import '../style/listStaff.scss';
import CreateContract from "./CreateContract";
import EditContractVip from './EditContractVip';
import ContractView from './ContractView';
import AuthService from "../services/auth.service";
ListContractView.propTypes = {
  data: PropTypes.array,
};

ListContractView.defaultProps = {
  data: [
    {
      contractCode: '321asd',
      beginDate: '29/12/2002',
      endDate: '31/12/2002',
    },
    {
      contractCode: '32xxxxsd',
      beginDate: '1/12/2022',
      endDate: '2/12/2022',
    },
  ],
};
function ListContractView({ data }) {
  const [content, setContent] = useState(data);
  const [IsAdmin, setIsAdmin] = useState(false);
  const [IsStaff, setIsStaff] = useState(false);
  const [IsCustomer, setIsCustomer] = useState(false);
  useEffect(() => {
    ContractService.getContractByAdmin().then(
      (response) => {
        setContent(response.data)
      }
    )
    const user = AuthService.getCurrentUser();
    if (user) {
      setIsAdmin(user.roles.includes("ROLE_ADMIN"));
      setIsStaff(user.roles.includes("ROLE_STAFF"));
      setIsCustomer(user.roles.includes("ROLE_CUSTOMER"));
    }
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
        {IsAdmin || IsStaff && (
          <div className="container-search_liststaff">
            <button className='button-create' onClick={() => { setNewContract(true) }}>Create New Contract</button>
          </div>
        )}
        <table className="content-table">
          <thead>
            <tr>
              <th>CODE</th>
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
        <div
        //  className="modalCst"
        >
          <div
          // className="modal-edit"
          >
            <EditContractVip
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
