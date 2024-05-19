'use client'

import React from "react";

import CustromPagination from "../layouts/CustromPagination";
import '../layouts/styles.css'
import axios from "axios";


const StepData = async() => {

   const getSteps = async ( ) => {
    const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/admin/step`);
    return data;
}

    const data = await getSteps()

  
    return (

        <div className="customer relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-3xl my-5 ml-4 font-bold">
                    {/* ({ data?.productsCount}) <Link href="/admin/customer/new" className="btn btn-primary">Create Customer</Link> */}

                </h1>
            <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Like
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Links
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User
                        </th>
                        
                    
                    </tr>
                </thead>
                <tbody>
             
                    {data?.steps?.map(( product ) => (
                        
                        <tr className="bg-white">
                        <td className="px-6 py-2">{product?.user.email}</td>
                        <td className="px-6 py-2">{product?.like}</td>
                        <td className="px-6 py-2">{product?.step}</td>
                    </tr>
                    ))}
         
                </tbody>
            </table>

            <div className="mb-6">
                <CustromPagination
                    resPerPage={data?.resPerPage}
                    productsCount={data?.filteredProductsCount}
                />
            </div>
        </div>

    );
};

export default StepData;