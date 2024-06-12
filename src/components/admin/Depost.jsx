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
            const response = await axios.post("https://master.d28j0wql6qmeva.amplifyapp.com/api/admin/depost", createDepost, {


                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });



            if (response.status === 201) {
                window.location.replace("/admin/depost/getdata");
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
    
            
            <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
            Give Points 
      </h1>
    
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

            
            <div className="mb-4 py-3">
            <label class="visually-hidden" for="inlineFormSelectPref">Links</label>
                <select data-mdb-select-init class="select" 
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                >
                
                <option>youtube</option>
                <option>restaurants</option>
                <option >hotels</option>
                <option >celebrities</option>
                <option >countries</option>
                <option>scenaries</option>


            </select>
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

        </section>
    )

}

export default Depost;



