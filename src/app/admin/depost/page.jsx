
import Depost from "../../../components/admin/Depost";
import { cookies } from "next/headers";
import axios from "axios";


const getUsers = async () => {
    const nextCookies = cookies();
  
    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

    const { data } = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/admin/users`,
      {
        headers: {
          Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
        },
      }
    );
  
    return data;
  };
  


const DepostPage = async () => {

    const users = await getUsers();

    return<Depost data={users} />

}

export default DepostPage;

