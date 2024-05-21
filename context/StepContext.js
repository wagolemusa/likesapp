'use client'
import { createContext, useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation'

const  StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [updated, setUpdated] = useState(false);


    const router = useRouter();


    // creating steps

    const newStep = async(step) => {
        try {
            const { data } = await axios.post(
              `${process.env.NEXTAUTH_URL}/api/step`,
              step
            );
      
            if (data) {
              router.replace("/step");
            }
          } catch (error) {
            setError(error?.response?.data?.message);
          }
        };

    return (
        <StepContext.Provider
            value={{
                error,
                updated,
                setUpdated,
                loading,
                setLoading,
                newStep,
            }}
        
        >
            {children}
        </StepContext.Provider>
    )
}

export default StepContext;

