// code, date, description

import "../style/accidentModal.scss";
import { useEffect, useState } from "react";
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

const CreateAccident = ({ setCreateAccident }) => {
  const [accident, setaccident] = useState({
    code: "",
    date:"",
    description:""
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
    UserService.createaccident(accident).then(() => {
      console.log("create success");
    });
  };

  return (
    <div>
      <div className="createaccidentBackground">
        <div className="container-create-accident">
          <form action="" className="accidentContent">
            <div className="main-create-accident">
              <button onClick={() => setCreateAccident(false)}> x </button>
              <h2>Create accident</h2>
              <div className="Profile">
                <div className="flex-container-profile">
                  <div className="left-profile flex-profile">
                    <h4>
                      <BsFillPersonFill className="icon" /> Code{" "}
                      <input
                        placeholder="Enter Name"
                        value={accident.code}
                        onChange={(e) => {
                          setaccident({
                            ...accident,
                            code: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillCalendarEventFill className="icon" /> Begin date{" "}
                      <input
                        type="date"
                        placeholder="date"
                        value={accident.date}
                        onChange={(e) => {
                          setaccident({
                            ...accident,
                            date: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillCalendarEventFill className="icon" /> description{" "}
                      <input
                        type="date"
                        value={accident.description}
                        placeholder="Enter end date"
                        onChange={(e) => {
                          setaccident({
                            ...accident,
                            description: e.target.value,
                          });
                        }}
                      />
                    </h4>
                  </div>
                </div>
              </div>

              <div className="btn-create-contract">
                <input
                  onClick={() => handleClickCreate()}
                  type="submit"
                  value="Create"
                  className="btn-input-create-vip"
                />
                <button>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateAccident;
