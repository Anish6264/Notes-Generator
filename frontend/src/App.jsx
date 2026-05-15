import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import { getCurrrentUser } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
export const serverUrl = "http://localhost:8000"
function App() {
  const dispatch = useDispatch();
   useEffect(() => {
  getCurrrentUser(dispatch)
   }, [dispatch])

   const {userData} = useSelector((state) => state.user);
   console.log("Current User Data:", userData);

  return (
    <>
      <Routes>
        <Route path="/" element={userData ? <Home /> : <Navigate to="/auth" replace /> } />
        <Route path="/auth" element={userData ? <Navigate to="/" replace /> : <Auth />} />
      </Routes>
    </>
  )
}

export default App
