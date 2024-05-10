
import queryString from 'query-string'
import axios from 'axios';
import DepostedData from '../../../../components/admin/DepostedData';


 const getDeposits = async ( ) => {
     const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/depost/getdata`);
     return data;
 }


const DepostPageData = async () => {

     const data = await getDeposits()

    return <DepostedData  data={data}/>
}

export default DepostPageData;

