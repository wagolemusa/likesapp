import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import onError from "../../../backend/middlewares/errors"
import { newStep } from '../../../backend/controllers/stepControllers';
import { isAuthenticatedUser } from '../../../backend/middlewares/auth'


const router = createRouter( { onError });

dbConnect();

router.use(isAuthenticatedUser).post(newStep);

export default router.handler();