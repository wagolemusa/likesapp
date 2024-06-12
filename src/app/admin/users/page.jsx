
import axios from "axios";
import React from "react"
import { cookies } from "next/headers";

import queryString from "query-string";
import Users from "../../../components/admin/Users";




const AdminUsersPage = async () => {

  return <Users/>;
};

export default AdminUsersPage;