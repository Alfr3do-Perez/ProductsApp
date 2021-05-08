import {Router} from 'express';
const router = Router();
import * as authContoller from '../controllers/auth.controller';
import {verifySingup} from '../middlewares'

router.post('/singup', [verifySingup.checkDuplicateUsernameOrEmail, verifySingup.checkeRolesExisted] , authContoller.singUp);
router.post('/singin', authContoller.singIn);

export default router;