
import React from "react"

import Message from "../../../components/admin/Message";

const getMessage = async ( ) => {
    const { sms } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/messages`);
    return sms;
}


const MassagePage = async () => {

const sms = await getMessage()
 
    return <Message sms={sms} />

};

export default MassagePage;

