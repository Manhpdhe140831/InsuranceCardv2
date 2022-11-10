import React, { useState } from 'react';
import { AiOutlineBarcode, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import '../style/editListStaff.scss';
EditContract.propTypes = {
    
};

function EditContract({contract, handleCloseModal}) {
    const [contractDetail, setContractDetail] = useState({
        contractCode: contract?.contractCode,
        customerName:contract?.customerName,
        startDate: contract?.startDate,
        endDate: contract?.endDate,   
      });

    return (
        <div className="container">
      <div className="col-lg-12 col-md-12">
        <div className="wrapper">
          <div className="icon-close" onClick={handleCloseModal}>
            <GrClose size={34} />
          </div>
          <div className="row no-gutters">
            <div className="col-md-7 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <form id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <p>CONTRACT CODE</p>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={contractDetail.contractCode}
                          onChange={(e) =>
                            setContractDetail({
                              ...contractDetail,
                              customerName: e.target.value,
                            })
                          }
                          placeholder="code"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                      <p>CUSTOMER NAME</p>
                        <input
                          type="text"
                          className="form-control"
                          name="picture"
                          id="picture"
                          value={contractDetail.customerName}
                          onChange={(e) =>
                            setContractDetail({
                              ...contractDetail,
                              description: e.target.value,
                            })
                          }
                          placeholder="customer name"
                        />
                      </div>
                    </div> 
                    <div className="col-md-12">
                      <div className="form-group">
                      <p>START DATE</p>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          value={contractDetail.startDate}
                          onChange={(e) =>
                            setContractDetail({
                              ...contractDetail,
                              startDate: e.target.value,
                            })
                          }
                          placeholder="start date"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                      <p>END DATE</p>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          value={contractDetail.endDate}
                          onChange={(e) =>
                            setContractDetail({
                              ...contractDetail,
                              endDate: e.target.value,
                            })
                          }
                          placeholder="end date"
                        />
                      </div>
                    </div>                        
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Save"
                          className="btn btn-primary"
                        />
                        <div className="submitting"></div>
                      </div>
                    </div>              
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
              <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineBarcode size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Code:</span> {contractDetail.contractCode}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineUser size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Date:</span> {contractDetail.customerName}
                    </p>
                  </div>
                </div>                
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCalendar size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Description:</span> {contractDetail.startDate}
                    </p>
                  </div>
                </div>   
                <div className="dbox w-100 d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCalendar size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Description:</span> {contractDetail.endDate}
                    </p>
                  </div>
                </div>   

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default EditContract;