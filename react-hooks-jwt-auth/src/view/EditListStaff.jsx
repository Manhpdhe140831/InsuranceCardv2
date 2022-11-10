import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { RiCake2Line } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import '../style/editListStaff.scss';
EditListStaff.propTypes = {};

function EditListStaff({ staff, handleCloseModal }) {
  // const [accountStaff, setAccountStaff] = useState({
  //   username: '',
  //   password: '',
  // });
  const [profileStaff, setProfileStaff] = useState({
    name: staff?.name,
    gender: staff?.gender,
    birthday: staff?.birthday,
    folk: staff?.folk,
    phone: staff?.phone,
    email: staff?.email,
  });
  const [addressStaff, setAddressStaff] = useState({
    country: staff?.country,
    city: staff?.city,
    district: staff?.district,
    street: staff?.street,
  });

  const gender = profileStaff.gender === 'MALE' ? true : false;
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
                          value={profileStaff.name}
                          onChange={(e) =>
                            setProfileStaff({
                              ...profileStaff,
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
                          value={profileStaff.email}
                          onChange={(e) =>
                            setProfileStaff({
                              ...profileStaff,
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
                          value={profileStaff.phone}
                          onChange={(e) =>
                            setProfileStaff({
                              ...profileStaff,
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
                          value={profileStaff.gender}
                          onChange={() =>
                            setProfileStaff({ ...profileStaff, gender: 'MALE' })
                          }
                        />
                        {/* (e)=>setProfileStaff({...profileStaff,gender:e.target.value}) */}
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
                          value={profileStaff.gender}
                          onChange={() =>
                            setProfileStaff({
                              ...profileStaff,
                              gender: 'FEMALE',
                            })
                          }
                        />
                        {/* (e)=>setProfileStaff({...profileStaff,gender:e.target.value}) */}
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
                          value={profileStaff.folk}
                          onChange={(e) =>
                            setProfileStaff({
                              ...profileStaff,
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
                          value={profileStaff.birthday}
                          onChange={(e) =>
                            setProfileStaff({
                              ...profileStaff,
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
                          value={addressStaff.country}
                          onChange={(e) =>
                            setAddressStaff({
                              ...addressStaff,
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
                          value={addressStaff.city}
                          onChange={(e) =>
                            setAddressStaff({
                              ...addressStaff,
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
                          value={addressStaff.district}
                          onChange={(e) =>
                            setAddressStaff({
                              ...addressStaff,
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
                          value={addressStaff.street}
                          onChange={(e) =>
                            setAddressStaff({
                              ...addressStaff,
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
                      <span>Name:</span> {profileStaff.name}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlinePhone size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Phone:</span> {profileStaff.phone}
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
                      <span>Email:</span> {profileStaff.email}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <AiOutlineLike size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Folk:</span> {profileStaff.folk}
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <RiCake2Line size={30} />
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Birthday:</span> {profileStaff.birthday}
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
                      {addressStaff.country}-{addressStaff.city}-
                      {addressStaff.district}-{addressStaff.street}
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

export default EditListStaff;
