'use client'
import { AuthProvider } from "../context/AuthContext";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider";
import { StepProvider } from "../context/StepContext";

export function GlobalProvider({ children }){
    return(
        <>
    <ToastContainer position="bottom-right" />
    <Provider>
        <AuthProvider>
            <StepProvider>
                <SessionProvider>{children}</SessionProvider>
            </StepProvider>
        </AuthProvider>
    </Provider>
        </>
    )
}

