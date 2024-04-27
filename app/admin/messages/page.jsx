import axios from "axios";
import React from "react"
import { cookies } from "next/headers";


import Message from "../../../components/admin/Message";

const getMessage = async () => {

  const { data } = await axios.get(
    `${process.env.ENVIRONMENT_URL}/api/admin/message`,
  );

  return data;
};


const MassagePage = async () => {
  
  const sms = await getMessage();

  return <Message data={sms} />;
};

export default MassagePage;