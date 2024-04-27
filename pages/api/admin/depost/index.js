import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect"
import onError from "../../../../backend/middlewares/errors"

import { isAuthenticatedUser } from "../../../../backend/middlewares/auth"

import { newDeposit } from '../../../../backend/controllers/depostControllers';


const router = createRouter({ 
    onError,
 });

dbConnect();
router.use(isAuthenticatedUser).post(newDeposit);

export default router.handler();