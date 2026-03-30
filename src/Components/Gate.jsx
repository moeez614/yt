import React from 'react'
import Logo from '../Layout/Logo'
import Departments from '../Components/Departments'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Gate = () => {
  const [dropdown, setdropdown] = useState(true)
  const [dropdown2, setdropdown2] = useState(true)
  const [dropdown3, setdropdown3] = useState(true)
  const [dropdown4, setdropdown4] = useState(true)

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000);
  }, [])



  return (
    <div>
      <Logo />
      <section className='Dropdown-effect'>
        <div>

          <button onClick={() => { setdropdown(!dropdown); setdropdown2(true); setdropdown3(true); setdropdown4(true) }}>
            Hospital History
            {
              dropdown ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink>Vision & Mission</NavLink>
              </li>
              <li>
                <NavLink>Infrastrcture</NavLink>
              </li>
              <li>
                <NavLink>Certification & Awards</NavLink>
              </li>
              <li>
                <NavLink>Management team</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 2 */}
        <div>
          <button onClick={() => { setdropdown2(!dropdown2); setdropdown(true); setdropdown3(true); setdropdown4(true) }}>
            Departments
            {
              dropdown2 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown2 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink>Cardiology</NavLink>
              </li>
              <li>
                <NavLink>Orthopedics</NavLink>
              </li>
              <li>
                <NavLink>Neurology</NavLink>
              </li>
              <li>
                <NavLink>Pediatrics</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 3333333 */}
        <div>
          <button onClick={() => { setdropdown3(!dropdown3); setdropdown(true); setdropdown2(true); setdropdown4(true) }}>
            Services
            {
              dropdown3 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown3 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink>Emergency</NavLink>
              </li>
              <li>
                <NavLink>ICU</NavLink>
              </li>
              <li>
                <NavLink>Lab Tests</NavLink>
              </li>
              <li>
                <NavLink>Pharmacy</NavLink>
              </li>
              <li>
                <NavLink>Ambulance</NavLink>
              </li>
            </ul>
          }
        </div>
        {/* 4444444444 */}
        <div>
          <button onClick={() => { setdropdown4(!dropdown4); setdropdown(true); setdropdown2(true); setdropdown3(true) }}>
            Contact
            {
              dropdown4 ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
            }
          </button>
          {
            !dropdown4 &&
            <ul className='dropdown-listed-items'>
              <li>
                <NavLink to={"/googlemap"}>Google Map</NavLink>
              </li>
              <li>
                <NavLink>Emergency Number</NavLink>
              </li>
              <li>
                <NavLink>Information center</NavLink>
              </li>

            </ul>
          }
        </div>

      </section>
      <section className="g2-fclass">
        <h3>
          HOSPITAL
        </h3>
      </section>

      <section className='gray-chart'>
        <h3>
          Allied Hospital
        </h3>
        <div className="gray-chart-patients">
          {/* table of patients */}
          <h5>Dated : {time.toLocaleDateString()}</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>25</td>
                <td>Male</td>
                <td>1234567890</td>
                <td>123 Main St</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="details">
        <div className="box-dr">
          <h4><i className="fa-solid fa-user-doctor"></i>Doctors</h4>
          <h5>00</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-user-nurse"></i>Staff Nurses</h4>
          <h5>00</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-briefcase-medical"></i>Paramedics</h4>
          <h5>00</h5>
        </div>
        <div className="box-dr">
          <h4><i className="fa-solid fa-staff-snake"></i>Others</h4>
          <h5>00</h5>
        </div>
      </section>

      <Departments />

      <section>
        <h4 className="title">
          <i className="fa-solid fa-hospital"></i>
          Infrastructure
        </h4>
        <div className="infra">
          <div className='infra-hosp'>
            <img src="/infrastructure.jpg" alt="" />
            <p>Our hospital is equipped with modern infrastructure designed to provide high-quality healthcare in a safe and comfortable environment. We feature advanced medical equipment, fully equipped operation theaters, and well-maintained patient wards to ensure efficient treatment and care. Our facility includes state-of-the-art diagnostic labs, imaging services, and emergency units that operate 24/7 to handle critical situations promptly.

              The hospital is built with a patient-centric approach, offering clean and spacious rooms, intensive care units (ICU), and specialized departments to meet diverse medical needs. We also ensure uninterrupted power supply, proper sanitation systems, and a secure environment to maintain the highest standards of hygiene and safety. Our infrastructure supports both patients and healthcare professionals, enabling effective treatment and a smooth healthcare experience.</p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Gate
