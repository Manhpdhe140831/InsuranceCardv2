import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/listContractCustomer.scss';
import CompensationH from './CompensationH';
import '../style/listStaff.scss';
ListHistoryCompensation.propTypes = {
  data: PropTypes.array,
};

ListHistoryCompensation.defaultProps = {
  data: [
    {
      code:'2x',   
      date:'30/12/2002',
      status:'donex',    
     },
    {
     code:'2x',   
     date:'30/12/2002',
     status:'donex',    
    },
  ],
};
function ListHistoryCompensation({ data }) {
  
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
              <th>DATE</th>                                  
              <th>STATUS</th>             
            </tr>
          </thead>
          <tbody>
            {content.map((compensation) => (
              <CompensationH
                key={compensation.code}
                compensation={compensation}
                setIsShow={setIsShow}
                setCompensationTemp={setCompensationTemp}
              />
            ))}
          </tbody>
        </table>       
      </div>
    </React.Fragment>
  );
}

export default ListHistoryCompensation;
