"use client";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CreateStepAir = () => {

    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        const createAirport = {
            like: "liked",
            step: "Airports",
            user
        }

        try {
            const response = await axios.post("https://master.d24sycgowgt1de.amplifyapp.com/api/step", createAirport, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                window.location.replace("/airport");
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

    return (
        <>
        <section className="step3">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Like and Get reworded</h2>
                    <p>Take advantage of our zero commission rates
                        just by Click the button bellow
                    </p>
                    <form onSubmit={handleSave}>
                        <button
                            type="submit"
                            className="btnStep"
                        >
                            Like Airports
                        </button>
                    </form>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="stepRefer">
                    <center>
                    <p>Earn commission for referring new users to the system</p>
                        <button className="btnStep1">Refer</button>
                    </center>
                
                </div>
                </div>
                <div className="col-md-2"></div>
                </div>
                
           
            </div>
        </section>
    
        </>


    )

}

export default CreateStepAir



