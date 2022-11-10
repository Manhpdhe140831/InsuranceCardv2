import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/listContractCustomer.scss';
import AccidentH from './AccidentH';
import '../style/listStaff.scss';
ListHistoryAccident.propTypes = {
  data: PropTypes.array,
};

ListHistoryAccident.defaultProps = {
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
function ListHistoryAccident({ data }) {
    const [content, setContent] = useState(data);

  const [isShow, setIsShow] = useState(false);
  const [isShowContract, setIsShowContract] = useState(false);
  const [accidentTemp, setAccidentTemp] = useState(null);


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
              <AccidentH
                key={accident.code}
                accident={accident}
                setIsShow={setIsShow}
                setAccidentTemp={setAccidentTemp}
              />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ListHistoryAccident;
