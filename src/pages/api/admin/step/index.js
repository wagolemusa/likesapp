import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect"
import onError from "../../../../backend/middlewares/errors"

import { isAuthenticatedUser } from "../../../../backend/middlewares/auth"

import { getsteps } from '../../../../backend/controllers/stepControllers';


const router = createRouter({ 
    onError,
 });

dbConnect();
router.use(isAuthenticatedUser).get(getsteps);

export default router.handler();