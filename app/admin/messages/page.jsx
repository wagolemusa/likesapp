// import axios from "axios";
import React from "react"
// import { cookies } from "next/headers";

import Message from "../../../components/admin/Message";

// const getMessage = async ( ) => {
//   const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/messages`);
//   return data;
// }

const MassagePage = async () => {

  // const data = await getMessage()
  
  // return <Message  data={data}/>;
  return <Message />

};

export default MassagePage;

