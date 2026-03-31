import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Gate from './Components/Gate'
import Logo from './Layout/Logo'
import Admin from './Pages/Admin'
import DashSide from './Components/DashSide'
import Patient from './Pages/Patient'
import Appointment from './Pages/Appointment'
import Doctor from './Pages/Doctor'
import Register from './Components/Register'
import Dr_profile from './Pages/Dr_profile'
import Googlemap from './Components/Googlemap'
import Staff from './Components/Staff'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Gate />}></Route>
          <Route path='/h' element={<>enjoy kar</>}></Route>
          <Route path='/googlemap' element={<Googlemap /> }> </Route>
          {/* Admin Portal */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<DashSide />}></Route>
            <Route path='appointment' element={<Appointment />}></Route>
            <Route path='staff' element={<Staff />}></Route>
          </Route>
          {/* Patient Portal */}
          <Route path='/patient_portal'>
            <Route index element={<Patient />}></Route>
            <Route path='myprofile' element={<>myprofile</>}></Route>
            <Route path='appointment' element={<Appointment />}></Route> 
          </Route>
          {/* Doctor Portal */}
          <Route path='/doctor_portal'>
            <Route index element={<Doctor />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='okay' element={<Dr_profile />}></Route>

          </Route>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
