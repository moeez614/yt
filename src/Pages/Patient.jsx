import React from 'react'
import { Link } from 'react-router-dom'
import PatientDash from '../Components/PatientDash'
const Patient = () => {
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
                                    <i class="fa-solid fa-id-badge"></i>
                                    Moeez Ali
                                </h4>
                                <img src="/Frame.png" alt="" />
                            </div>
                            <section className="detail-p">
                                <div>
                                    <div>

                                        <h5>Age :</h5>
                                        <h6>~~</h6>
                                    </div>
                                    <div>
                                        <h5>
                                            <i class="fa-solid fa-droplet khoon"></i>
                                        </h5>
                                        <h6>~~</h6>
                                    </div>
                                </div>
                                <div>
                                    <h5>Gender :</h5>
                                    <h6>~~</h6>
                                </div>
                                <div>
                                    <h5><i class="fa-solid fa-location-dot loc"></i></h5>
                                    <h6>~~</h6>
                                </div>

                                <div>
                                    <h5>
                                        <i class="fa-solid fa-address-card navy"></i>
                                    </h5>
                                    <h6>~~</h6>
                                </div>
                                <div>
                                    <h5><i class="fa-solid fa-phone tali"></i></h5>
                                    <h6>~~</h6>
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
