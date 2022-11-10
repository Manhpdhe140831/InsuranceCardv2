// code, date, description
import { useEffect, useState } from "react";
import "../style/createCompensation.scss";
import {
    BsFillCalendarEventFill, BsFillPersonFill   
} from "react-icons/bs";
import UserService from "../services/user.service";
import "../style/createContract.scss";
// function makeid(length) {
//     var result = '';
//     var characters = '0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

const CreateCompensation = ({ setReportCompensation }) => {
    const [Compensation, setCompensation] = useState({
        code: "",
        description: "",
        status: "",
        requestDate: "",
        responseDate: ""
    });

    const [customer, setCustomer] = useState([
        {
            id: 1,
            name: "a",
        },
        {
            id: 2,
            name: "b",
        },
    ]);

    useEffect(() => {
        UserService.getCustomer().then((response) => {
            setCustomer(response.data);
        });
    }, []);
    console.log(customer);

    const handleClickCreate = () => {
        UserService.createCompensation(Compensation).then(() => {
            console.log("create success");
        });
    };

    return (
        <div>
            <div className="createCompensationBackground">
                <div className="container-create-Compensation">
                    <form action="" className="CompensationContent">
                        <div className="main-create-Compensation">
                            <button onClick={() => setReportCompensation(false)}> x </button>
                            <h1>Create Compensation</h1>
                            <div className="Profile">
                                <div className="flex-container-profile">
                                    <div className="left-profile flex-profile">
                                        <h4>
                                            <BsFillPersonFill className="icon" /> Code{" "}
                                            <input
                                                placeholder="Enter Name"
                                                value={Compensation.code}
                                                onChange={(e) => {
                                                    setCompensation({
                                                        ...Compensation,
                                                        code: e.target.value,
                                                    });
                                                }}
                                            />
                                        </h4>
                                        <h4>
                                            <BsFillCalendarEventFill className="icon" /> description{" "}
                                            <input
                                                type="date"
                                                value={Compensation.description}
                                                placeholder="Enter end date"
                                                onChange={(e) => {
                                                    setCompensation({
                                                        ...Compensation,
                                                        description: e.target.value,
                                                    });
                                                }}
                                            />
                                        </h4>

                                        <h4>
                                            <BsFillCalendarEventFill className="icon" /> Status{" "}
                                            <input
                                                type="text"
                                                placeholder="text"
                                                value={Compensation.status}
                                                onChange={(e) => {
                                                    setCompensation({
                                                        ...Compensation,
                                                        status: e.target.value,
                                                    });
                                                }}
                                            />
                                        </h4>

                                        <h4>
                                            <BsFillCalendarEventFill className="icon" /> Request Date{" "}
                                            <input
                                                type="date"
                                                placeholder="date"
                                                value={Compensation.requestDate}
                                                onChange={(e) => {
                                                    setCompensation({
                                                        ...Compensation,
                                                        requestDate: e.target.value,
                                                    });
                                                }}
                                            />
                                        </h4>
                                        <h4>
                                            <BsFillCalendarEventFill className="icon" /> Response Date{" "}
                                            <input
                                                type="date"
                                                placeholder="date"
                                                value={Compensation.responseDate}
                                                onChange={(e) => {
                                                    setCompensation({
                                                        ...Compensation,
                                                        responseDate: e.target.value,
                                                    });
                                                }}
                                            />
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-create-Compensation">
                                <input
                                    onClick={() => handleClickCreate()}
                                    type="submit"
                                    value="Create"
                                    className="btn-input-create-vip"
                                />
                                <div className="btn-create-Compensation">
                                <input
                                    onClick={() => setReportCompensation(false)}
                                    type="submit"
                                    value="cancel"
                                    className="btn-input-create-vip"
                                />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CreateCompensation;