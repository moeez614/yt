import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useForm } from 'react-hook-form';
import {format} from 'date-fns'

ChartJS.register(ArcElement, Tooltip, Legend);
const Disease = () => {
    const date = new Date();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const data = {
        labels: ["Covid 19", "Dengue", "Malaria", "Typhoid", "Hepatitis", "Influenza", "Phnemonia", "Chikenpox"],
        datasets: [
            {
                label: "Patients",
                data: [7, 4, 10, 21, 1, 6, 3, 11],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                    "rgb(89, 6, 244)",
                    "rgb(247, 25, 236)"
                ],
                borderWidth: 1,
            }
        ]
    }


    return (
        <div className='disease' >
            <h4 className='title text-center'>Patients & Visitors</h4>
            <h4 className='date'>Dated : {format(date, "eeee,MMMM do, yyyy")}</h4>
            <section className='flex'>
                <div className="in-patient">
                    <table>
                        <tbody>
                            <tr>
                                <td>Number of covid 19 patientsin 24 hours</td>
                                <td>00</td>
                            </tr><tr>
                                <td>Number of Dengue patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Malaria patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Typhoid patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Hepatitis patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Influenza patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Pneumonia patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                            <tr>
                                <td>Number of Chickenpox patients in 24 hours</td>
                                <td>00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* pie chart */}
                <div style={{ width: "300px", margin: "auto" }}>
                    <Pie data={data} />
                </div>
            </section>

            <section className="input-patient-surva">
                <h4 className='title text-center'>Input Patients</h4>
                <form action="">
                    <input type="number" placeholder='Number of Covid 19' />
                    <input type="number" placeholder='Number of Dengue' />
                    <input type="number" placeholder='Number of Malaria' />
                    <input type="number" placeholder='Number of Typhoid' />
                    <input type="number" placeholder='Number of Hepatitus' />
                    <input type="number" placeholder='Number of Influenza' />
                    <input type="number" placeholder='Number of Pneumonia' />
                    <input type="number" placeholder='Number of Chickenpox' />
                    <button>Submit</button>
                </form>
            </section>

        </div >
    )
}

export default Disease
