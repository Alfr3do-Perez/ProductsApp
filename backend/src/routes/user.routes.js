import {Router} from 'express';
import * as userController from '../controllers/user.controller'
import {authJWT, verifySingup} from '../middlewares'
const router = Router();

router.post('/',[
    authJWT.verifyToken,
    authJWT.isAdmin,
    verifySingup.checkeRolesExisted
],userController.createUser);

export default router;