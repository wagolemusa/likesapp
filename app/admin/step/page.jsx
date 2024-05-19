import React from "react"
import axios from "axios";
import StepData from "../../../components/admin/StepData";

const getSteps = async () => {
    try {
      const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/step`);
      return data;
    } catch (error) {
      console.error('Error fetching steps:', error);
      throw error;
    }
  };
  
  // Example usage of getSteps
  (async () => {
    try {
      const steps = await getSteps();
      console.log(steps);
    } catch (error) {
      console.error('Failed to get steps:', error.message);
    }
  })();

const stepPage = async() => {

    const data = await getSteps()

    return <StepData data={data}/>
}

export default stepPage;



