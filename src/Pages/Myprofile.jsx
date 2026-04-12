import React from 'react'
import PatientDash from '../Components/PatientDash'
import { useState, useEffect } from 'react'
import Frame from "../assets/Frame.png"

const Myprofile = () => {

    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);

    const handlechange = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setUrl(reader.result);
        }

    }, [file])

    return (
        <div>
            <PatientDash />
            <section className='edit-profile'>
                <form action="">
                    <label className='camera'>
                        <input type="file" placeholder='Profile picture' hidden
                            onChange={handlechange}
                        />
                        {
                            url ?
                                <img src={url} alt="" />
                                :
                                <div>
                                    <img src={Frame} alt="" />
                                    <h6>Click to add photo</h6>
                                </div>
                        }

                    </label><br />

                    <div className='allign'>
                        <label htmlFor=""><i class="fa-regular fa-user"></i>Full Name</label>
                        <input type="text" placeholder='Name' /> <br />
                        <label htmlFor=""><i class="fa-solid fa-people-group"></i>Guardian</label>
                        <input type="text" placeholder='Guardian' /><br />
                        <label htmlFor=""><i class="fa-solid fa-at"></i>Email</label>
                        <input type="email" placeholder='Email' /> <br />
                        <label htmlFor=""><i class="fa-regular fa-id-badge"></i>CNIC</label>
                        <input type="number" placeholder='12345-1234567-8'/><br />
                        <label htmlFor=""><i class="fa-regular fa-calendar"></i>DOB</label>
                        <input type="date" placeholder='Date of Birth' /> <br />
                    </div>
                    <div className='allign'>
                        <label htmlFor=""><i class="fa-solid fa-location-arrow"></i>Address</label>
                         <input type="text" placeholder='Address' /> <br />
                        <label htmlFor=""><i class="fa-solid fa-phone"></i>Phone Number</label>
                        <input type="tel" placeholder='+92XXX-XXXXXXX' /> <br />
                        <label htmlFor=""><i class="fa-solid fa-phone"></i>Emergency Contact</label>
                        <input type="tel" placeholder='Emergency Contact' /> <br />

                        <div className='label'>
                            <label htmlFor=""><i class="fa-solid fa-person-half-dress"></i>Gender</label> <br />
                            <select name="" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='label'>
                            <label htmlFor=""><i class="fa-solid fa-droplet"></i>Blood Group</label> <br />
                            <select name="Blood" id="Blood">
                                <option value="A+">A+</option>
                                <option value="A-">A−</option>
                                <option value="B+">B+</option>
                                <option value="B-">B−</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB−</option>
                                <option value="O+">O+</option>
                                <option value="O-">O−</option>
                            </select>
                        </div>
                    </div>
                    <div className='allign textarea'>
                        <textarea placeholder='Medical History (Optional)' ></textarea>
                        <button type='Submit'>Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Myprofile
