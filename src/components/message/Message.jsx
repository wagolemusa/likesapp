"use client";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CreateMessage = () => {

    const [textsms, setTextsms] = useState("")
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const isValidObjectId = (id) => /^[a-f\d]{24}$/i.test(id);


    const handleSMSSave = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isValidObjectId(user.id)) {
            setError("Invalid user ID format");
            return;
        }

        const createSms = {
            textsms,
            user: user.id
        }
        try {
            const response = await axios.post("https://likeapp-8ccf7f87ba61.herokuapp.com/api/message", createSms, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                window.location.replace("/thanks");
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
        <div className="topback">
            <div className="container">
                <h2>CUSTOMER SERVICE</h2>
            </div>
        </div>
        <section className="cantactStyle">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Contact Customer care</h2>
                        <p>For your reword and more information</p>
                        <hr/>
                        <h4>homiemusa@gmail.com</h4>
                        
                        <h4>+256754188938</h4>

                    </div>
                    <div className="col-md-6 contactback">
                        <form onSubmit={handleSMSSave}>
                            <div class="form-outline" data-mdb-input-init>
                                <textarea class="form-control" id="textAreaExample" rows="4"
                                placeholder="Write a message to customer care requesting for reword"
                                    name={textsms}
                                    value={textsms}
                                    onChange={(e) => setTextsms(e.target.value)}
                                ></textarea>
                            </div><br/>
                            <button
                                type="submit"
                                className="contactbutton px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>

    )

}

export default CreateMessage



