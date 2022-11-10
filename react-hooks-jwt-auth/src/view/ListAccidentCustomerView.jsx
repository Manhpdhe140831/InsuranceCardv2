import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/listContractCustomer.scss';
import '../style/listStaff.scss';
import AccidentCustomerView from './AccidentCustomerView';
import EditAccident from './EditAccident';

ListAccident.propTypes = {
  data: PropTypes.array,
};

ListAccident.defaultProps = {
  data: [
    {
     code:'1',
     date:'29/12/2002',
     description:'nhu cai dau buoi'
    },
    {
     code:'2',
     date:'29/12/2002',
     description:'nhu cai dau buoi'
    },
  ],
};
function ListAccident({ data }) { 
  const [content, setContent] = useState(data);
  const [isShow, setIsShow] = useState(false);
  const [isShowContract, setIsShowContract] = useState(false);
  const [accidentTemp, setAccidentTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
    setIsShowContract(false);
  };

  return (
    <React.Fragment>
      <div className="container_liststaff">
        <div className="container-search_liststaff">          
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>CODE</th>
              <th>DATE</th>
              <th>DESCRIPTION</th>                       
            </tr>
          </thead>
          <tbody>
            {content.map((accident) => (
              <AccidentCustomerView
                key={accident.code}
                accident={accident}
                setIsShow={setIsShow}
                setAccidentTemp={setAccidentTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditAccident
                accident={accidentTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}       
      </div>
    </React.Fragment>
  );
}

export default ListAccident;
