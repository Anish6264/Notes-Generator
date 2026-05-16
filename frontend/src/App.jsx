import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import History from "./pages/History";
import Notes from "./pages/Notes";
import Pricing from "./pages/Pricing";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

import { useEffect } from "react";

import { getCurrrentUser } from "./services/api";

import { useDispatch, useSelector } from "react-redux";

export const serverUrl = "https://notes-generatorbackend.onrender.com";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrrentUser(dispatch);
  }, [dispatch]);

  const { userData, loading } = useSelector((state) => state.user);


  // LOADING SCREEN
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-5">
          <div className="h-14 w-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Exam Notes AI
          </h1>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/auth"
        element={userData ? <Navigate to="/" replace /> : <Auth />}
      />

      <Route
        path="/history"
        element={userData ? <History /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/pricing"
        element={userData ? <Pricing /> : <Navigate to="/auth" replace />}
      />

      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-failed" element={<PaymentFailed />} />
    </Routes>
  );
}

export default App;
