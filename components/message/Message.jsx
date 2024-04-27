"use client";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CreateMessage = () => {

    const [message, setMessage] = useState("")
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");


    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        const createSteps = {
            message,
            user
        }


        try {
            const response = await axios.post("http://localhost:3000/api/message", createSteps, {


                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });



            if (response.status === 201) {
                window.location.replace("/admin/steps2");
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
        <div className="container">

            <h1>Connect to Admin</h1>
            <h1></h1>
            <form onSubmit={handleSave}>
                <div class="form-outline" data-mdb-input-init>
                    <textarea class="form-control" id="textAreaExample" rows="4"
                        name={message}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label class="form-label" for="textAreaExample">Message</label>
                </div>

                <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                    Send Message
                </button>
            </form>

        </div>
    )

}

export default CreateMessage



