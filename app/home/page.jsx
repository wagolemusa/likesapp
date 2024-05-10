import React from "react";
import { cookies } from "next/headers";
import axios from "axios";
import HomePage from "../page";


const getUsers = async () => {
  const nextCookies = cookies();

  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const { data } = await axios.get(
    `${process.env.ENVIRONMENT_URL}/api/admin/users`,
    {
      headers: {
        Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
      },
    }
  );

  return data;
};

const HomePage = async () => {


  const users = await getUsers();

  return<Home  users={data}/>
}
export default HomePage;