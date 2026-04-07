import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const Doctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        // e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/login`, {
                email,
                password
            });
            console.log(res.data);
            localStorage.setItem("token", res.data.token);

            const token = res.data.token
            await axios.get("http://localhost:5000/api/protected", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='login-doctor'>
            <section className='dr-login-design'>
                <h3>
                    <i class="fa-solid fa-user-doctor"></i>
                    Doctor Portal
                </h3>
                <form onSubmit={() => login()}>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder='Email' required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" placeholder='Password' required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='Submit'>Login</button>
                    <p>Don't have an account? <Link to={'register'}>Register</Link> <Link to={"okay"}>SECRET</Link></p>
                </form>

            </section>
        </div>
    )
}

export default Doctor
