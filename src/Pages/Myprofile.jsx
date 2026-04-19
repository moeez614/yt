import React from 'react'
import PatientDash from '../Components/PatientDash'
import { useState, useEffect } from 'react'
import Frame from "../assets/Frame.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Myprofile = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    const [files, setfile] = useState(null)
    const [usern, setUserName] = useState("")
    const [guardian, setguardian] = useState("")
    const [email, setemail] = useState("")
    const [cnic, setcnic] = useState("")
    const [dob, setdob] = useState("")
    const [address, setadress] = useState("")
    const [phone, setphone] = useState("")
    const [ephone, setephone] = useState("")
    const [gender, setgender] = useState("")
    const [blood, setblood] = useState("")
    const [text, settext] = useState("")

    const [status, setstatus] = useState('')

    const formsubmit = () => {
        try {
            const {id} = useParams()
            const formdata = new FormData();
            formdata.append("image", files);
            formdata.append("usern", usern);
            formdata.append("guardian", guardian);
            formdata.append("email", email);
            formdata.append("cnic", cnic);
            formdata.append("dob", dob);
            formdata.append("address", address);
            formdata.append("phone", phone);
            formdata.append("ephone", ephone);
            formdata.append("gender", gender);
            formdata.append("blood", blood);
            formdata.append("text", text);

            console.log(typeof formdata)
            axios.put(import.meta.env.VITE_API_URL + `/api/profile_edit/${id}`,
                formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(setstatus("Patient profile updated successfully"))

            navigate("/patient_profile")
        }
        catch (error) {
            console.log(error)
            setstatus("Patient profile failed")
        }
    }


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
                <form onSubmit={() => formsubmit()}>
                    <label className='camera'>
                        <input type="file" placeholder='Profile picture' hidden
                            onChange={
                                (e) => {
                                    handlechange(e)
                                    setfile(e.target.files[0])
                                }
                            }
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
                        <input type="text" placeholder='Name'
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        /> <br />
                        <label htmlFor=""><i class="fa-solid fa-people-group"></i>Guardian</label>
                        <input type="text" placeholder='Guardian'
                            required
                            onChange={(e) => setguardian(e.target.value)}
                        /><br />
                        <label htmlFor=""><i class="fa-solid fa-at"></i>Email</label>
                        <input type="email" placeholder='Email'
                            required
                            onChange={(e) => setemail(e.target.value)}
                        /> <br />
                        <label htmlFor=""><i class="fa-regular fa-id-badge"></i>CNIC</label>
                        <input type="text" placeholder='12345-1234567-8'
                            required
                            onChange={(e) => setcnic(e.target.value)}
                            pattern='[0-9]{5}-[0-9]{7}-[0-9]{1}'
                            maxLength={15}
                            // onChange={controlcnic()}
                        /><br />
                        <label htmlFor=""><i class="fa-regular fa-calendar"></i>DOB</label>
                        <input type="date" placeholder='Date of Birth'
                            required
                            onChange={(e) => setdob(e.target.value)}
                        /> <br />
                    </div>
                    <div className='allign'>
                        <label htmlFor=""><i class="fa-solid fa-location-arrow"></i>Address</label>
                        <input type="text" placeholder='Address'
                            required
                            onChange={(e) => setadress(e.target.value)}
                        /> <br />
                        <label htmlFor=""><i class="fa-solid fa-phone"></i>Phone Number</label>
                        <input type="tel" placeholder='+92XXX-XXXXXXX'
                            required
                            onChange={(e) => setphone(e.target.value)}
                        /> <br />
                        <label htmlFor=""><i class="fa-solid fa-phone"></i>Emergency Contact</label>
                        <input type="tel" placeholder='Emergency Contact'
                            required
                            onChange={(e) => setephone(e.target.value)} /> <br />

                        <div className='label'>
                            <label htmlFor=""><i class="fa-solid fa-person-half-dress"></i>Gender</label> <br />
                            <select name="" id="" onChange={(e) => setgender(e.target.value)} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='label'>
                            <label htmlFor=""><i class="fa-solid fa-droplet"></i>Blood Group</label> <br />
                            <select name="Blood" id="Blood" onChange={(e) => setblood(e.target.value)} required>
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
                        <textarea placeholder='Medical History (Optional)'
                            onChange={(e) => settext(e.target.value)}
                        ></textarea>
                        <button type='Submit'>Save</button>
                    </div>
                </form>
            </section>
            {
                status && <h6 className='status'>
                    {status}
                </h6>
            }
        </div>
    )
}

export default Myprofile
