'use client'

import React, { useContext, useEffect} from "react";
import Link from "next/link";
import CustromPagination from "../layouts/CustromPagination";
import { toast } from "react-toastify";
import '../layouts/styles.css'


const Message = ({ data }) => {

        console.log("ffffff", data)
    const deleteHandler = (id) => {
        deleteCustomer(id);
    }
  
    return (

        <div className="customer relative overflow-x-auto shadow-md sm:rounded-lg">
                <h1 className="text-3xl my-5 ml-4 font-bold">
                </h1>
            <table className="table w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Message
                        </th>
                        
                    
                    </tr>
                </thead>
                <tbody>
             
                    {data?.message?.map(( product ) => (
                        
                        <tr className="bg-white">
                        <td className="px-6 py-2">{product?.user.email}</td>
                        <td className="px-6 py-2">{product?.textsms}</td>
                   
                        
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

export default Message;