import { useState } from "react";
import "../style/createStaff.scss";
import {
    BsFillPersonFill,
    BsShieldLockFill,
    BsFillCalendarEventFill,
    BsFillTelephoneFill,
    BsEnvelopeFill,
    BsFillPeopleFill,
    BsGenderAmbiguous,
    BsGeoAltFill,
} from "react-icons/bs";
import AuthService from "../services/auth.service";


const GMale = "male";
const GFemale = "female";
const CreateUser = ({ setCreateUser }) => {
    const [profile, setProfile] = useState({
        username: "",
        password: "",
        name: "",
        gender: "",
        birthday: "",
        email: "",
        address: "",
        phone: "",
    });

    const handleOnlickCreate = () => {
        AuthService.signup(profile).then(() => {
            console.log("create success");
        });
        console.log(profile);
    };

    return (
        <div>
            <div className="createUserBackground">
                <div className="container-create-staff">
                    <div className="main-create-staff">
                        <button className="closeModal" onClick={() => setCreateUser(false)}> x </button>
                        <h1>Create Staff</h1>
                        <div className="Profile">
                            <div className="grid">
                                <h4>
                                    <BsFillPersonFill className="icon" />
                                    Username:{" "}
                                    <input
                                        placeholder="enter username"
                                        value={profile.username}
                                        onChange={(e) => {
                                            setProfile({
                                                ...profile,
                                                username: e.target.value,
                                            });
                                        }}
                                    />
                                </h4>
                                <h4>
                                    <BsShieldLockFill className="icon" /> Password:{" "}
                                    <input
                                        type="password"
                                        value={profile.password}
                                        placeholder="enter password"
                                        onChange={(e) => {
                                            setProfile({
                                                ...profile,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                </h4>
                            </div>
                        </div>
                        <div className="Profile">
                            <div className="flex-container-profile">
                                <div className="left-profile flex-profile">
                                    <h4>
                                        <BsFillPersonFill className="icon" /> Name:{" "}
                                        <input
                                            placeholder="enter name"
                                            value={profile.name}
                                            onChange={(e) => {
                                                setProfile({
                                                    ...profile,
                                                    name: e.target.value,
                                                });
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsGenderAmbiguous className="icon" /> Gender: <br />
                                    </h4>
                                    <input
                                        type="radio"
                                        name="gender"
                                        onChange={(e) => {
                                            setProfile({ ...profile, gender: GMale });
                                        }}
                                    />{" "}
                                    MALE
                                    <br></br>
                                    <input
                                        type="radio"
                                        name="gender"
                                        onChange={(e) => {
                                            setProfile({ ...profile, gender: GFemale });
                                        }}
                                    />{" "}
                                    FEMALE
                                </div>
                                <div className="right-profile flex-profile">
                                    <h4>
                                        <BsFillCalendarEventFill className="icon" /> Birthday:{" "}
                                        <input
                                            type="date"
                                            value={profile.birthday}
                                            onChange={(e) => {
                                                setProfile({
                                                    ...profile,
                                                    birthday: e.target.value,
                                                });
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillTelephoneFill className="icon" /> Phone:{" "}
                                        <input
                                            type="number"
                                            placeholder="enter phone number"
                                            value={profile.phone}
                                            onChange={(e) => {
                                                setProfile({
                                                    ...profile,
                                                    phone: parseInt(e.target.value),
                                                });
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsEnvelopeFill className="icon" /> Email:{" "}
                                        <input
                                            type="email"
                                            placeholder="enter email"
                                            value={profile.email}
                                            onChange={(e) => {
                                                setProfile({
                                                    ...profile,
                                                    email: e.target.value,
                                                });
                                            }}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="Profile">
                            <h4>
                                <BsGeoAltFill className="icon" /> Address:{" "}
                                <input
                                    placeholder="enter Address"
                                    value={profile.address}
                                    onChange={(e) => {
                                        setProfile({ ...profile, address: e.target.value });
                                    }}
                                />
                            </h4>
                        </div>
                        <div className="btn-create-staff">
                            <button onClick={() => handleOnlickCreate()}>Create</button>
                            <button className="closeModal" onClick={() => setCreateUser(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateUser;
