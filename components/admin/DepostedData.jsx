'use client'
import React, { useState, useEffect } from 'react';
import CustromPagination from "../layouts/CustromPagination";
import axios from 'axios';

const DepostedData = () =>{

const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/api/admin/depost/getdata');
            setData(response.data);
        } catch (error) {
            setError('Failed to fetch data');
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, []);


    return (

        <div className="customer relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-3xl my-5 ml-4 font-bold">
                    {/* ({ data?.productsCount}) <Link href="/admin/customer/new" className="btn btn-primary">Create Customer</Link> */}

                </h1>
            <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Links
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                    
                    </tr>
                </thead>
                <tbody>
             
               {data?.deposits?.map(( product ) => (
                        
                        <tr className="bg-white">
                        <td className="px-6 py-2">{product?.username}</td>
                        <td className="px-6 py-2">{product?.steps}</td>
                        <td className="px-6 py-2">{product?.amount}</td>
                        
                
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


export default DepostedData;