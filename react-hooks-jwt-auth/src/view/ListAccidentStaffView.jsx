import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../style/listContractCustomer.scss';
import '../style/listStaff.scss';
import AccidentStaffView from './AccidentStaffView';
import EditAccident from './EditAccident';
import CreateAccident from './createAccident';

ListAccidentStaffView.propTypes = {
  data: PropTypes.array,
};

ListAccidentStaffView.defaultProps = {
  data: [
    {
      code: '1',
      date: '29/12/2002',
      description: 'nhu cai dau buoi'
    },
    {
      code: '2',
      date: '29/12/2002',
      description: 'nhu cai dau buoi'
    },
  ],
};
function ListAccidentStaffView({ data }) {
  const [reportAccident, setReportAccident] = useState(false);
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
          <button className="button-create" onClick={() => {setReportAccident(true)}}>
            Create Accident
          </button>
        </div>
        <div className="container-search_liststaff">
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>CODE</th>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {content.map((accident) => (
              <AccidentStaffView
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
          <div 
           className="modalCst"
          >
            <div 
             className="modal-edit"
            >
              <EditAccident
                accident={accidentTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )}
      </div>

          {reportAccident && <CreateAccident setCreateAccident={setReportAccident}/>}
    </React.Fragment>
  );
}

export default ListAccidentStaffView;
