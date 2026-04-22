import React from 'react'
import PatientDash from '../Components/PatientDash'
import doctor from '../assets/doctor.png'
import check from '../assets/check.png'
import calendar from '../assets/calendar.png'

const Appointment = () => {
  return (
    <div>
      <PatientDash />
      <section className="appointment-page">
        <div className="bg-frame">
          <div className='portable'>
            <h5>APPOINTMENT</h5>
            <h4>Book Your Appointment With Our <span>Specialists</span></h4>
            <h6>We are here to help you live a healthy life</h6>
            <h6>Book an appointment with our experianced doctors</h6>
          </div>
          <section className='color-svg'>
            <div>
              <img src={calendar} />
              <h6>Easy Booking</h6>
            </div>
            <div>
              <img src={doctor} />
              <h6>Expert Doctors</h6>
            </div>
            <div>
              <img src={check} />
              <h6>Quality Care</h6>
            </div>
          </section>

        </div>

      </section>
    </div>
  )
}

export default Appointment
