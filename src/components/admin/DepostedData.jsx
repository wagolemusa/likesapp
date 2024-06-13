'use client'
import React, { useState, useEffect } from 'react';
import CustromPagination from "../layouts/CustromPagination";
// import axios from 'axios';
import Link from 'next/link';

const DepostedData = ({ data }) =>{

const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('https://master.d1s2zcs2flgrc.amplifyapp.com/api/admin/depost/getdata');
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
                    <Link href="/me" className="btn btn-primary">Back</Link>  Tasks Performed Per User

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


export const getServerSideProps = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/admin/depost/getdata');
      return {
        props: {
          data: response.data,
          error: null,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null,
          error: 'Failed to fetch data',
        },
      };
    }
  };

export default DepostedData;