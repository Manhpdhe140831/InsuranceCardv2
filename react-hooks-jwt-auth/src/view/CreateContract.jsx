import { useState, useEffect } from 'react'
import '../style/createContract.scss'
import {
    BsFillPersonFill,
    BsFillCalendarEventFill,
    BsCashStack,
    BsCalendar2DateFill,
    BsFillFileEarmarkMedicalFill,

} from 'react-icons/bs'
import UserService from "../services/user.service"
// function makeid(length) {
//     var result = '';
//     var characters = '0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

const CreateContract = ({ setNewContract }) => {
    const [contract, setContract] = useState({
        code: '',
        beginDate: '',
        endDate: '',
        priceContract: '',
        FPF: '',
        SPF: '',
        FPFDate: '',
        SPFDate: '',
        contractDate: '',
        licenseplate: '',
        enginenumber: '',
        chassisnumber: '',
        vehicletype: '',
    })

    const [customer, setCustomer] = useState();

    useEffect(() => {
        UserService.getCustomer().then(
            (response) => {
                setCustomer(response.data)
            }
        )

    }, []);
    console.log(customer);

    return (
        <div>
            <div className="createContractBackground">
                <div className='ContractBackground'></div>
                <div className="container-create-contract">
                    <div className="main-create-contract">
                        <button onClick={() => setNewContract(false)}> x </button>
                        <h1>Create Contract</h1>
                        <div className="Profile">
                            <div className="flex-container-profile">
                                <div className="left-profile flex-profile">
                                    <h4>
                                        <BsFillPersonFill className="icon" /> Code{' '}
                                        <input
                                            placeholder="Enter Name"
                                            value={contract.code}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    code: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillCalendarEventFill className="icon" /> Begin Date{' '}
                                        <input
                                            type="date"
                                            placeholder="Enter begin date"
                                            value={contract.beginDate}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    beginDate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillCalendarEventFill className="icon" /> End Date{' '}
                                        <input
                                            type="date"
                                            value={contract.endDate}
                                            placeholder="Enter end date"
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    endDate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsCashStack className="icon" /> Price Contract {' '}
                                        <input
                                            type="text"
                                            placeholder="Enter price contract"
                                            value={contract.priceContract}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    priceContract: parseFloat(e.target.value),
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsCashStack className="icon" /> First Payment Fee{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter First Payment Fee"
                                            value={contract.FPF}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    FPF: parseFloat(e.target.value),
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillFileEarmarkMedicalFill className="icon" /> Engine:{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter Engine Number"
                                            value={contract.enginenumber}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    enginenumber: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillFileEarmarkMedicalFill className="icon" /> Vehicle Type{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter Vehicle type"
                                            value={contract.vehicletype}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    vehicletype: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                </div>
                                <div className="left-profile flex-profile">
                                    <h4>
                                        <BsCashStack className="icon" /> Second Payment Fee{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter Second Payment Fee"
                                            value={contract.SPF}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    SPF: parseFloat(e.target.value),
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsCalendar2DateFill className="icon" /> FPF Date{' '}
                                        <input
                                            type="date"
                                            value={contract.FPFDate}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    FPFDate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsCalendar2DateFill className="icon" /> SPF Date{' '}
                                        <input
                                            type="date"
                                            placeholder="enter email"
                                            value={contract.SPFDate}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    SPFDate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsCalendar2DateFill className="icon" /> Contract Date{' '}
                                        <input
                                            type="date"
                                            placeholder="enter email"
                                            value={contract.contractDate}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    contractDate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillFileEarmarkMedicalFill className="icon" /> Lisense Plate{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter Plate Number"
                                            value={contract.licenseplate}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    licenseplate: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>
                                    <h4>
                                        <BsFillFileEarmarkMedicalFill className="icon" /> Chassis:{' '}
                                        <input
                                            type="text"
                                            placeholder="Enter Chassis Number"
                                            value={contract.chassisnumber}
                                            onChange={(e) => {
                                                setContract({
                                                    ...contract,
                                                    chassisnumber: e.target.value,
                                                })
                                            }}
                                        />
                                    </h4>


                                </div>
                            </div>
                        </div>

                        <div className="btn-create-contract">
                            <button>Create</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CreateContract
