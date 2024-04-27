"use client";
import React, {useContext, useState} from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CreateStep = () =>{

    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        const createSteps = {
            like : "liked",
            step : "stepOne",
            user
        }

        console.log("accesory", createSteps)
        try {
            const response = await axios.post("http://localhost:3000/api/step", createSteps, {
               
           
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            

            if (response.status === 201) {
                window.location.replace("/admin/accessory");
            }

            setSuccess(response.data.message);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    }

    return(
        <div className="container">

            <h1>users the best</h1>
            <h1>Step One</h1>
                <form onSubmit={handleSave}>
       
                <button
                type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
          Create Product
        </button>
                </form>

        </div>
    )

}

export default CreateStep



