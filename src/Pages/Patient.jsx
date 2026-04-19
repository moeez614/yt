import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PatientDash from '../Components/PatientDash'
import axios from 'axios'
const Patient = () => {
    const [patient, setPatient] = useState([])
    // const latest = patient[patient.length - 1];
    console.table(patient)

    useEffect(() => {
        const chalni = async () => {
            await axios.get(import.meta.env.VITE_API_URL + '/api/patientcrools').then((res) => {
                setPatient([...res.data])
            }).catch((err) => {
                console.log(err)
            })
        }
        chalni()
    }, [])
    patient.map((data) => {
        console.log(data.imge.data)
    })

    return (

        <>
            <PatientDash />
            {/* <img src="/patientcare.webp" alt="" className='patient-care-image' /> */}
            <section className='patient-dash'>
                <div className='correction'>
                    <div className="patient-apt">
                        <h3>
                            <i class="fa-solid fa-circle-check"></i>
                            Appointments
                        </h3>
                        <div className='milkyway'>

                            <h5>No appointments yet</h5>
                            <h5>Book your first appointment to get started</h5>
                            <Link to={"appointment"}>Book Appointment</Link>
                        </div>
                    </div>

                    {/* for profile */}
                    <section className="mection">

                        <div className='patient-profile'>
                            <div className='img-frame'>
                                <h4>
                                    <div>

                                    <i class="fa-solid fa-id-badge"></i>
                                    {
                                        patient[0]?.usern
                                    }
                                    </div>
                                    <h6 className='h6'>Uid : {patient[0]?.cnic}</h6>
                                </h4>
                                {
                                    patient.map((data, index) => {
                                        const base64 = btoa(
                                            new Uint8Array(data.imge.data.data)
                                                .reduce((acc, byte) => acc + String.fromCharCode(byte), "")
                                        );

                                        return (
                                            <img
                                                key={index}
                                                src={`data:${data.imge.contentType};base64,${base64}`}
                                                width="100"
                                                alt=""
                                            />
                                        );
                                    })
                                }
                            </div>
                            <section className="detail-p">
                                <div>
                                    <div>

                                        <h5>DOB :</h5>
                                        <h6>{patient[0]?.dob}</h6>
                                    </div>
                                    <div>
                                        <h6>
                                            <i class="fa-solid fa-droplet khoon"></i>
                                            {patient[0]?.blood}
                                        </h6>
                                    </div>
                                </div>

                                <div>
                                    <h6>
                                        <i class="fa-solid fa-location-dot loc"></i>
                                        {patient[0]?.address}
                                    </h6>
                                    <h6>
                                        <i class="fa-solid fa-people-group"></i>
                                        {patient[0]?.guardian}
                                    </h6>
                                    
                                </div>
                                <div>
                                    <h6><i class="fa-solid fa-phone tali"></i>{patient[0]?.phone}</h6>
                                    <h6><i class="fa-solid fa-phone tali"></i>{patient[0]?.ephone}</h6>
                                </div>
                                <div>
                                    <h6><i class="fa-solid fa-person-half-dress"></i>
                                    {patient[0]?.gender}</h6>
                                    <h6>
                                        <i class="fa-solid fa-address-card navy"></i>
                                        {patient[0]?.email}
                                    </h6>
                                </div>
                                <div className="edit-p-info">
                                    <Link to={"myprofile"}>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        <h5>Edit</h5>
                                    </Link>
                                    <Link>
                                        <i class="fa-solid fa-right-from-bracket"></i>
                                        <h5>Logout</h5>
                                    </Link>
                                </div>

                            </section>
                        </div>
                        {/* for reports amd medical records */}
                        {/* for reports amd medical records */}
                        {/* for reports amd medical records */}

                        <div className="myreports">
                            <Link>
                                <i class="fa-solid fa-file"></i>
                                Medical Reports
                            </Link>
                            <Link>
                                <i class="fa-solid fa-receipt"></i>
                                Prescriptions
                            </Link>

                        </div>
                    </section>

                </div>
                {/* developer moeez ali , do you like it🙄 */}

            </section>
        </>
    )
}

export default Patient
