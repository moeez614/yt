import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { useState , useEffect } from 'react';

const Staff = () => {
  let { register, handleSubmit, formState: { errors } } = useForm();
  const [time, settime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      settime(new Date())
    }, 1000);    
  
  }, [])
  
  return (
    <div>
      <section className="staff-mang">
        <h3 className='title'>Staff Management</h3>
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

        <div className='edit-staff'>
          <h5>
            These all information are for users and staff.
          </h5>
          <h4>
            Dated : {time.toLocaleDateString()}
          </h4>

          <div className="daba">
            <form action="">
                <input type="number" placeholder='No. of Doctor' />
                <input type="number" placeholder='No. of Nurses' />
                <input type="number" placeholder='No. of Paramedics' />
                <input type="number" placeholder='No. of Others' />
                <input type="number" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
              <button>Submit</button>
            </form>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff
