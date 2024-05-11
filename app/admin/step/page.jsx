import React from "react"
// import axios from 'axios';

import StepData from "../../../components/admin/StepData";

// const getSteps = async ( ) => {
//     const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/step`);
//     return data;
// }

const stepPage = async() => {

    // const data = await getSteps()

    // return<StepData  data={data}/>

    return <StepData />
}

export default stepPage;



