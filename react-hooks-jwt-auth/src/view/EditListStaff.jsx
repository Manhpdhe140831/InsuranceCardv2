import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { RiCake2Line } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import '../style/editListStaff.scss';
import UserService from "../services/user.service";
EditListCustomerVip.propTypes = {};

function EditListCustomerVip({ customer, handleCloseModal }) {
  // const [accountStaff, setAccountStaff] = useState({
  //   username: '',
  //   password: '',
  // });
  const [profileCustomer, setProfileCustomer] = useState({
    id: customer?.id,
    name: customer?.name,
    gender: customer?.gender,
    dateOfBirth: customer?.dateOfBirth,
    folk: customer?.folk,
    phone: customer?.phone,
    email: customer?.email,
    address: customer?.address,
  });


  const gender = profileCustomer.gender === 'MALE' ? true : false;
  console.log(gender);
  const handleOnClickSave = () => {
    UserService.updateUser(profileCustomer).then(() => {
      console.log("update success");
    });
  }

  return (
    <div className="container">
      <div className="col-lg-12 col-md-12">
        <div className="wrapper">
          <div className="icon-close" onClick={handleCloseModal}>
            <GrClose size={34} />
          </div>
          <div className="row no-gutters">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="contact-wrap w-100 p-md-5 p-4">

                <form id="contactForm" name="contactForm" className="saveFormStaff">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>NAME</p>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={profileCustomer.name}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            name: e.target.value,
                          })
                        }
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>EMAIL</p>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={profileCustomer.email}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            email: e.target.value,
                          })
                        }
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <p>PHONE</p>
                      <input
                        type="phone"
                        className="form-control"
                        name="phone"
                        id="phone"
                        value={profileCustomer.phone}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="radio"
                        className="form-control-radio"
                        name="gender"
                        id="gender"
                        checked={gender}
                        value={profileCustomer.gender}
                        onChange={() =>
                          setProfileCustomer({ ...profileCustomer, gender: 'MALE' })
                        }
                      />
                      {/* (e)=>setProfileCustomer({...profileCustomer,gender:e.target.value}) */}
                      MALE
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="radio"
                        className="form-control-radio"
                        name="gender"
                        id="gender"
                        checked={!gender}
                        value={profileCustomer.gender}
                        onChange={() =>
                          setProfileCustomer({
                            ...profileCustomer,
                            gender: 'FEMALE',
                          })
                        }
                      />
                      {/* (e)=>setProfileCustomer({...profileCustomer,gender:e.target.value}) */}
                      FEMALE
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>FOLK</p>
                      <input
                        type="text"
                        className="form-control"
                        name="folk"
                        id="folk"
                        value={profileCustomer.folk}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            folk: e.target.value,
                          })
                        }
                        placeholder="Folk"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>BIRTHDAY</p>
                      <input
                        type="date"
                        className="form-control"
                        name="birthday"
                        id="birthday"
                        value={profileCustomer.dateOfBirth}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            dateOfBirth: e.target.value,
                          })
                        }
                        placeholder="Birthday"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        id="country"
                        value={profileCustomer.address}
                        onChange={(e) =>
                          setProfileCustomer({
                            ...profileCustomer,
                            address: e.target.value,
                          })
                        }
                        placeholder="address"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Save"
                        className="btn btn-primary"
                        onClick={() => handleOnClickSave()}

                      />
                      <div className="submitting"></div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineUser size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Name:</span> {profileCustomer.name}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlinePhone size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Phone:</span> {profileCustomer.phone}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <BsGenderAmbiguous size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Gender:</span> MALE
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineMail size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Email:</span> {profileCustomer.email}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineLike size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Folk:</span> {profileCustomer.folk}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiCake2Line size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Birthday:</span> {profileCustomer.dateOfBirth}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <SlLocationPin size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Address:</span>
                      {profileCustomer.address}
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

export default EditListCustomerVip;
