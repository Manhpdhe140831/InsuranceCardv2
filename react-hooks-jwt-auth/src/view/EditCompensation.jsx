import React, { useState } from 'react';
import { AiOutlineBarcode, AiOutlineCalendar, AiOutlineCheckSquare, AiOutlineFileText } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import '../style/editListStaff.scss';
EditCompensation.propTypes = {
    
};

function EditCompensation({compensation, handleCloseModal}) {
    const [compensationDetail, setCompensationDetail] = useState({
        code: compensation?.code,
        status: compensation?.status,
        description: compensation?.description,   
        requestDate:compensation?.requestDate,
        responseDate:compensation?.responseDate
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
                <form method="POST" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                      <p>CODE</p>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={compensationDetail.code}
                          onChange={(e) =>
                            setCompensationDetail({
                              ...compensationDetail,
                              code: e.target.value,
                            })
                          }
                          placeholder="code"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <p>STATUS</p>
                        <input
                          type="text"
                          className="form-control"
                          name="status"
                          id="status"
                          value={compensationDetail.status}
                          onChange={(e) =>
                            setCompensationDetail({
                              ...compensationDetail,
                              status: e.target.value,
                            })
                          }
                          placeholder="status"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                      <p>DESCRIPTION</p>
                        <input
                          type="text"
                          className="form-control"
                          name="picture"
                          id="picture"
                          value={compensationDetail.description}
                          onChange={(e) =>
                            setCompensationDetail({
                              ...compensationDetail,
                              description: e.target.value,
                            })
                          }
                          placeholder="description"
                        />
                      </div>
                    </div>     
                    <div className="col-md-12">
                      <div className="form-group">
                        <p>REQUEST DATE</p>
                        <input
                          type="date"
                          className="form-control"
                          name="requestDate"
                          id="requestDate"
                          value={compensationDetail.requestDate}
                          onChange={(e) =>
                            setCompensationDetail({
                              ...compensationDetail,
                              requestDate: e.target.value,
                            })
                          }
                          placeholder="request date"
                        />
                      </div>
                    </div>  
                    <div className="col-md-12">
                      <div className="form-group">
                      <p>RESPONSE DATE</p>
                        <input
                          type="date"
                          className="form-control"
                          name="responseDate"
                          id="responseDate"
                          value={compensationDetail.responseDate}
                          onChange={(e) =>
                            setCompensationDetail({
                              ...compensationDetail,
                              responseDate: e.target.value,
                            })
                          }
                          placeholder="response date"
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
                      <span>Code:</span> {compensationDetail.code}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCheckSquare size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Status:</span> {compensationDetail.status}
                    </p>
                  </div>
                </div>                
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineFileText size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Description:</span> {compensationDetail.description}
                    </p>
                  </div>
                </div>   
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCalendar size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Request Date:</span> {compensationDetail.requestDate}
                    </p>
                  </div>
                </div>  
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCalendar size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Response Date:</span> {compensationDetail.responseDate}
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

export default EditCompensation;