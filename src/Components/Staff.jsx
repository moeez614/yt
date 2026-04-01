import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { format } from 'date-fns';

const Staff = () => {
  let { register, handleSubmit, formState: { errors } } = useForm();
  const date = new Date();


  return (
    <div>
      <section className="staff-mang">
        <h3 className='title text-center'>Staff Management</h3>
        <section className="details">
          <div className="box-dr">
            <h4><i className="fa-solid fa-user-doctor"></i>Doctors</h4>
            <h5>00</h5>
          </div>
          <div className="box-dr">
            <h4><i className="fa-solid fa-user-nurse"></i>Nurses</h4>
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

        {/* edit staff */}
        <section className='flex'>
          <div className='edit-staff'>
            <h3>Staff Statistics</h3>
            <h5>
              This information is for users and staff.
            </h5>
            <h4>
              {/* Dated : {time.toLocaleDateString()} */}
              Dated : {format(date, 'eeee,MMMM do,yyyy')}
            </h4>

            <div className="daba">
              <form action="">
                <input type="number" placeholder='Number of Doctor' /><br />
                <input type="number" placeholder='Number of Nurses' /><br />
                <input type="number" placeholder='Number of Paramedics' /><br />
                <input type="number" placeholder='Number of Others' /><br />
                <button>Submit</button>
              </form>

            </div>
          </div>


          <div className="staff-record">
            <h3>Staff Record</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctors</th>
                  <th>Nurses</th>
                  <th>Paramedics</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>1 march 2026</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Tuesday,March 31st,2026</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    <button>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </section>

      </section>
    </div>
  )
}

export default Staff
