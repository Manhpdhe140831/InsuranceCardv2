import React, { useState } from 'react';
import { AiOutlineFileText, AiOutlinePicture, AiOutlineUser } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

EditListMotorbike.propTypes = {
    
};

function EditListMotorbike({motorbike, handleCloseModal}) {
    const [motorbikeDetail, setMotorbikeDetail] = useState({
        id: motorbike?.id,
        licensePlates: motorbike?.licensePlates,
        customerName: motorbike?.customerName,
        picture: motorbike?.picture,        
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
                <div id="form-message-warning" className="mb-4"></div>
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form method="POST" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={motorbikeDetail.customerName}
                          onChange={(e) =>
                            setMotorbikeDetail({
                              ...motorbikeDetail,
                              customerName: e.target.value,
                            })
                          }
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="licensePlates"
                          id="licensePlates"
                          value={motorbikeDetail.licensePlates}
                          onChange={(e) =>
                            setMotorbikeDetail({
                              ...motorbikeDetail,
                              licensePlates: e.target.value,
                            })
                          }
                          placeholder="licensePlates"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="picture"
                          id="picture"
                          value={motorbikeDetail.picture}
                          onChange={(e) =>
                            setMotorbikeDetail({
                              ...motorbikeDetail,
                              picture: e.target.value,
                            })
                          }
                          placeholder="urlPicture"
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
                    <AiOutlineUser size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Name:</span> {motorbikeDetail.customerName}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineFileText size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>licensePlates:</span> {motorbikeDetail.licensePlates}
                    </p>
                  </div>
                </div>                
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlinePicture size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      {/* {motorbikeDetail.picture} */}
                      <img className="img-motorbike" src={motorbikeDetail.picture} alt="" />
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

export default EditListMotorbike;