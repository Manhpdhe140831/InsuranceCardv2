import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/listContractCustomer.scss';
import CompensationStaffView from './CompensationStaffView';
import EditCompensation from './EditCompensation';
import '../style/listStaff.scss';

ListCompensation.propTypes = {
  data: PropTypes.array,
};

ListCompensation.defaultProps = {
  data: [
    {
     code:'1x',
     description:'nhu cai dau buoix',
     status:'donex',
     requestDate:'29/12/2002',
     responseDate:'30/12/2002'
    },
    {
     code:'2x',
     description:'nhu cai dau buoix',
     status:'donex',
     requestDate:'29/12/2002',
     responseDate:'30/12/2002'
    },
  ],
};
function ListCompensation({ data }) {
  const [content, setContent] = useState(data);
  const [isShow, setIsShow] = useState(false);
  const [isShowCompensation, setIsShowCompensation] = useState(false);
  const [CompensationTemp, setCompensationTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
    setIsShowCompensation(false);
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
              <th>DESCRIPTION</th>             
              <th>STATUS</th>             
              <th>REQUEST-DATE</th>             
              <th>RESPONSE-DATE</th>             
              <th>ACTION</th>             
            </tr>
          </thead>
          <tbody>
            {content.map((compensation) => (
              <CompensationStaffView
                key={compensation.code}
                compensation={compensation}
                setIsShow={setIsShow}
                setCompensationTemp={setCompensationTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditCompensation
                compensation={CompensationTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}       
      </div>
    </React.Fragment>
  );
}

export default ListCompensation;
