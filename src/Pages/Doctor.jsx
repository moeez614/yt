import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Doctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='login-doctor'>
            <section className='dr-login-design'>
                <h3>
                    <i class="fa-solid fa-user-doctor"></i>
                    Doctor Portal
                </h3>
                <form action="">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder='User Name' required />
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button>Login</button>
                    <p>Don't have an account? <Link to={'register'}>Register</Link> <Link to={"okay"}>SECRET</Link></p>
                </form>
                
            </section>
        </div>
    )
}

export default Doctor
