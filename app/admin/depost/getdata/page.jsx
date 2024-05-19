
import DepostedData from '../../../../components/admin/DepostedData';
import axios from 'axios';

const getDeposits = async ( ) => {
    const { step } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/depost/getdata`);
    return step;
}



const DepostPageData = async () => {
    const step = await getDeposits()

    return <DepostedData step={step}/>
}

export default DepostPageData;

