import { useState, lazy, Suspense } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import Gate from './Components/Gate'
const Gate = lazy(() => import('./Components/Gate'))
import Logo from './Layout/Logo'
import Admin from './Pages/Admin'
import DashSide from './Components/DashSide'
import Patient from './Pages/Patient'
const Appointment = lazy(() => import('./Pages/Appointment'))
const Doctor = lazy(() => import('./Pages/Doctor'))
const Register = lazy(() => import('./Components/Register'))
const Drprofile = lazy(() => import('./Pages/Dr_profile'))
const Googlemap = lazy(() => import('./Components/Googlemap'))
const Staff = lazy(() => import('./Components/Staff'))
const Disease = lazy(() => import('./Components/Disease'))
const Patientlogin = lazy(() => import('./Layout/Patientlogin'))
const Patientregester = lazy(() => import('./Layout/Patientregester'))
const Myprofile = lazy(() => import('./Pages/Myprofile'))
// loader
import Loader from './Components/Loader'
import PrivateRoute from './Components/PrivateRoute';

function App() {

  return (
    <>

      <HashRouter>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <Gate />
            </Suspense>
          }></Route>
          <Route path='/h' element={<>enjoy kar</>}></Route>
          <Route path='/googlemap' element={
            <Suspense fallback={<Loader />}>
              <Googlemap />
            </Suspense>
          }> </Route>
          {/* Admin Portal */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<DashSide />}></Route>
            <Route path='appointment' element={
              <Suspense fallback={<Loader />}>
                <Appointment />
              </Suspense>
              }></Route>
            <Route path='staff' element={
              <Suspense fallback={<Loader />}>
                <Staff />
              </ Suspense>
            }></Route>
            <Route path='patients' element={<Disease />}></Route>
          </Route>
          {/* Patient Portal */}
          <Route path='/patientlogin'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Patientlogin />
              </Suspense>
            }></Route>
            {/* patient registration */}
            <Route path='patientregistration' element={
              <Suspense fallback={<Loader />}>
                <Patientregester />
              </Suspense>
            }></Route>
          </Route>
          <Route path='/patient_profile'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Patient />
              </Suspense>
            }></Route>
            <Route path='patient' element={<Patient />}></Route>
            <Route path='myprofile' element={
              <Suspense fallback={<Loader />}>
                <Myprofile />
              </Suspense>
            }></Route>
            <Route path='appointment' element={<Appointment />}></Route>
          </Route>

          {/* Doctor Portal */}
          <Route path='/doctor_portal'>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Doctor />
              </Suspense>
            }></Route>
            <Route path='register' element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }></Route>
            <Route path='okay' element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute>
                  <Drprofile />
                </PrivateRoute>
              </Suspense>
            }></Route>

          </Route>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
