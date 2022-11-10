import React, { useState } from 'react';
import { AiOutlineBarcode, AiOutlineCalendar, AiOutlineFileText } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import '../style/editListStaff.scss';
EditAccident.propTypes = {
    
};

function EditAccident({accident, handleCloseModal}) {
    const [accidentDetail, setAccidentDetail] = useState({
        code: accident?.code,
        date: accident?.date,
        description: accident?.description,   
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
                          value={accidentDetail.code}
                          onChange={(e) =>
                            setAccidentDetail({
                              ...accidentDetail,
                              code: e.target.value,
                            })
                          }
                          placeholder="code"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <p>DATE</p>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          value={accidentDetail.date}
                          onChange={(e) =>
                            setAccidentDetail({
                              ...accidentDetail,
                              date: e.target.value,
                            })
                          }
                          placeholder="date"
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
                          value={accidentDetail.description}
                          onChange={(e) =>
                            setAccidentDetail({
                              ...accidentDetail,
                              description: e.target.value,
                            })
                          }
                          placeholder="description"
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
                      <span>Code:</span> {accidentDetail.code}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineCalendar size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Date:</span> {accidentDetail.date}
                    </p>
                  </div>
                </div>                
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineFileText size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Description:</span> {accidentDetail.description}
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

export default EditAccident;