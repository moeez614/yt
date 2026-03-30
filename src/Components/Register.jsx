import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='registration-dr'>
      <section>
        <h3>
            <i class="fa-solid fa-user-doctor"></i>
            Doctor Registration
        </h3>
        <hr />
        <form action="">
            {/* Profile phot */}
            <div><input type="file" placeholder='Profile Photo' required /></div>
            {/* information */}
            <h3>Information</h3>
            <div>
                <input type="text" placeholder='Full Name'/>
            </div>
            <div><input type="text" placeholder='Email' required /></div>
            <div><input type="text" placeholder='Phone Number' required/></div>
            <div><input type="password" placeholder='Password' required /></div>
            {/* professional details */}
            <h3>Professional Details</h3>
            <div><input type="text" placeholder='Specialization' required /></div>
            <div><input type="text" placeholder='Medical registration no.' required/></div>
            <div><input type="text" placeholder='Qualification' required/></div>
            <div><input type="text" placeholder='Year of Experience' required/></div>
            {/* work information */}
            <h3>Work Info</h3>
            <div><input type="text" placeholder='Consultation fee (Rs)' required /></div>
            <div><input type="text" placeholder='Available Days (per week)' required/></div>
            {/* Documents */}
            <div><input type="file" placeholder='Medical Certificate' required /></div>
            <div><input type="file" placeholder='CNIC' required /></div>
            



            <button>Submit</button>
        </form>

      </section>
    </div>
  )
}

export default Register
