import { useState, useEffect } from "react";
import "../style/createContract.scss";
import { GrClose } from 'react-icons/gr';
import {
  BsFillPersonFill,
  BsFillCalendarEventFill,
  BsCashStack,
  BsCalendar2DateFill,
  BsFillFileEarmarkMedicalFill,
} from "react-icons/bs";
import UserService from "../services/user.service";
// function makeid(length) {
//     var result = '';
//     var characters = '0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

const EditContractVip = ({ contract ,handleCloseModal }) => {
  const [contractDetail, setContractDetail] = useState({
    code: contract.code,
    beginDate: contract.beginDate,
    endDate: contract.endDate,
    priceContract: contract.priceContract,
    fpf: contract.fpf,
    spf: contract.spf,
    fpfdate: contract.fpfdate,
    spfdate: contract.spfdate,
    contractDate: contract.contractDate,
    license: contract.license,
    engineNumber: contract.engineNumber,
    frameNumber: contract.frameNumber,
    model: contract.model,
    accountDto: {
      id: contract.accountDto.id,
    },
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



  return (
    <div>
      <div className="createContractBackground">
        <div className="ContractBackground"></div>
        <div className="container-create-contract">
          <form action="">
            <div className="main-create-contract">
            <div className="icon-close" onClick={handleCloseModal}>
            <GrClose size={34} />
          </div>
              <h1>Create Contract</h1>
              <div className="Profile">
                <div className="flex-container-profile">
                  <div className="left-profile flex-profile">
                    <h4>
                      <BsFillPersonFill className="icon" /> Code{" "}
                      <input
                        placeholder="Enter Name"
                        value={contract.code}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            code: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillCalendarEventFill className="icon" /> Begin Date{" "}
                      <input
                        type="date"
                        placeholder="Enter begin date"
                        value={contract.beginDate}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            beginDate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillCalendarEventFill className="icon" /> End Date{" "}
                      <input
                        type="date"
                        value={contract.endDate}
                        placeholder="Enter end date"
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            endDate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsCashStack className="icon" /> Price Contract{" "}
                      <input
                        type="text"
                        placeholder="Enter price contract"
                        value={contract.priceContract}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            priceContract: parseFloat(e.target.value),
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsCashStack className="icon" /> First Payment Fee{" "}
                      <input
                        type="text"
                        placeholder="Enter First Payment Fee"
                        value={contract.fpf}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            FPF: parseFloat(e.target.value),
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillFileEarmarkMedicalFill className="icon" /> Engine:{" "}
                      <input
                        type="text"
                        placeholder="Enter Engine Number"
                        value={contract.engineNumber}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            enginenumber: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillFileEarmarkMedicalFill className="icon" /> Vehicle
                      Type{" "}
                      <input
                        type="text"
                        placeholder="Enter Vehicle type"
                        value={contract.model}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            vehicletype: e.target.value,
                          });
                        }}
                      />
                    </h4>
                  </div>
                  <div className="left-profile flex-profile">
                    <h4>
                      <BsCashStack className="icon" /> Second Payment Fee{" "}
                      <input
                        type="text"
                        placeholder="Enter Second Payment Fee"
                        value={contract.spf}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            SPF: parseFloat(e.target.value),
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsCalendar2DateFill className="icon" /> FPF Date{" "}
                      <input
                        type="date"
                        value={contract.fpfdate}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            FPFDate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsCalendar2DateFill className="icon" /> SPF Date{" "}
                      <input
                        type="date"
                        placeholder="enter email"
                        value={contract.spfdate}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            SPFDate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsCalendar2DateFill className="icon" /> Contract Date{" "}
                      <input
                        type="date"
                        placeholder="enter email"
                        value={contract.contractDate}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            contractDate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillFileEarmarkMedicalFill className="icon" /> Lisense
                      Plate{" "}
                      <input
                        type="text"
                        placeholder="Enter Plate Number"
                        value={contract.license}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            licenseplate: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillFileEarmarkMedicalFill className="icon" /> Chassis:{" "}
                      <input
                        type="text"
                        placeholder="Enter Chassis Number"
                        value={contract.frameNumber}
                        onChange={(e) => {
                          setContractDetail({
                            ...contract,
                            chassisnumber: e.target.value,
                          });
                        }}
                      />
                    </h4>
                    <h4>
                      <BsFillFileEarmarkMedicalFill className="icon" /> Customer:{" "}
                      <br />
                      <select
                        onChange={(e) =>
                          setContractDetail({
                            ...contract,
                            accountDto: { id: e.target.value },
                          })
                        }
                      >
                        {customer.map((customers) => (
                          <option value={customers.id}>{customers.name}</option>
                        ))}
                      </select>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="btn-create-contract">
                <input
                  // onClick={() => handleClickCreate()}
                  type="submit"
                  value="Update"
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
export default EditContractVip;
