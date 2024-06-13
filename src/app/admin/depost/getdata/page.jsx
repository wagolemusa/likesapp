
import DepostedData from '../../../../components/admin/DepostedData';
import axios from 'axios';

const getProducts = async () => {

    const { data } = await axios.get('https://master.d1s2zcs2flgrc.amplifyapp.com/api/admin/depost/getdata');
    return data;
}


const DepostPageData = async () => {

    const data = await getProducts();

    return <DepostedData data={data} />
}

export default DepostPageData;

