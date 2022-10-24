import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { RiCake2Line } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import '../style/editListStaff.scss';
EditListCustomer.propTypes = {};

function EditListCustomer({ customer, handleCloseModal }) {
  // const [accountStaff, setAccountStaff] = useState({
  //   username: '',
  //   password: '',
  // });
  const [profileCustomer, setProfileCustomer] = useState({
    name: customer?.name,
    gender: customer?.gender,
    birthday: customer?.birthday,
    folk: customer?.folk,
    phone: customer?.phone,
    email: customer?.email,
  });
  const [addressCustomer, setAddressCustomer] = useState({
    country: customer?.country,
    city: customer?.city,
    district: customer?.district,
    street: customer?.street,
  });

  const gender = profileCustomer.gender === 'MALE' ? true : false;
  console.log(gender);
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
                        <input
                          type="date"
                          className="form-control"
                          name="birthday"
                          id="birthday"
                          value={profileCustomer.birthday}
                          onChange={(e) =>
                            setProfileCustomer({
                              ...profileCustomer,
                              birthday: e.target.value,
                            })
                          }
                          placeholder="Birthday"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">Address</div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          id="country"
                          value={addressCustomer.country}
                          onChange={(e) =>
                            setAddressCustomer({
                              ...addressCustomer,
                              country: e.target.value,
                            })
                          }
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="city"
                          value={addressCustomer.city}
                          onChange={(e) =>
                            setAddressCustomer({
                              ...addressCustomer,
                              city: e.target.value,
                            })
                          }
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="district"
                          id="district"
                          value={addressCustomer.district}
                          onChange={(e) =>
                            setAddressCustomer({
                              ...addressCustomer,
                              district: e.target.value,
                            })
                          }
                          placeholder="District"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="street"
                          id="street"
                          value={addressCustomer.street}
                          onChange={(e) =>
                            setAddressCustomer({
                              ...addressCustomer,
                              street: e.target.value,
                            })
                          }
                          placeholder="Street"
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
                      <a href="tel://1234567920">+ 1235 2355 98</a>
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
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
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
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiCake2Line size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Birthday:</span> {profileCustomer.birthday}
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
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
                      {addressCustomer.country}-{addressCustomer.city}-
                      {addressCustomer.district}-{addressCustomer.street}
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

export default EditListCustomer;
