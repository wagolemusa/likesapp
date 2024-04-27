"use client";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Depost = ({ data }) => {

    const [username, setUsername] = useState("")
    const [steps, setSteps] = useState("")
    const [amount, setAmount] = useState("")
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");


    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        const createDepost = {
            username,
            steps,
            amount
        }

        try {
            const response = await axios.post("http://localhost:3000/api/admin/depost", createDepost, {


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
            }users
        }
    }



    return (
        <div className="container">
            <h1>Connect to Admin</h1>
    
            <form onSubmit={handleSave}>
            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select data-mdb-select-init class="select" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                >
                {data?.users?.map((user) => (
                <option >{user?.email}</option>
            ))}
            </select>


            <div className="mb-4">
          <label className="block mb-1"> Steps </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Amount </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
                <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
                >
                    Depost Points
                </button>
            </form>

        </div>
    )

}

export default Depost;



