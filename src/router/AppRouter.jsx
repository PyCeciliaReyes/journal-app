import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
    
    const {status} = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth/>
    }
    
    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<JournalRoutes/>} />
                    : <Route path="/auth/*" element={<AuthRoutes/>} />
            }
            <Route path="/*" element={ <Navigate to='/auth/login' />} />

            {/* login y registro */}
            {/* <Route path="/auth/*" element={<AuthRoutes/>} /> */}
            {/* journal app */}
            {/* <Route path="/*" element={<JournalRoutes/>} /> */}
        </Routes> 
    )
}

