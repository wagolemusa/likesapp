'use client'
import CustromPagination from "../layouts/CustromPagination";
import React,{useState, useEffect, Suspense} from "react";

import '../layouts/styles.css'
import axios from "axios";
import Link from "next/link";

const StepData = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://likeapp-8ccf7f87ba61.herokuapp.com/api/admin/step');
                setData(response.data);
            } catch (error) {
                setError('Failed to fetch data');
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    }, []);
    


    return (

        <Suspense className="customer relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-3xl my-5 ml-4 font-bold">
                    <Link href="/me" className="btn btn-primary">Back</Link> Tasks operated

                </h1>
            <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            USERS
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Likes
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tasks
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
        </Suspense>

    );
};

export default StepData;