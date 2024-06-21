"use client";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CreateStepBeach = () => {

    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);


    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isValidObjectId(user.id)) {
            setError("Invalid user ID format");
            return;
        }

        const createBeach = {
            like: "liked",
            step: "celebrities",
            user: user.id
        }

        try {
            const response = await axios.post("https://likeapp-8ccf7f87ba61.herokuapp.com/api/step", createBeach, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                window.location.replace("/celeb");
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
        <section className="celeb">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Like and Earn <span>200000</span></h2>
                    <p>We increase the popularity of the clients's businesses like celebrities on internet through likes
                    </p>
                    
                    <form onSubmit={handleSave}>
                        <button
                            type="submit"
                            className="btnStep"
                        >
                            Like Celebrities
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

export default CreateStepBeach



