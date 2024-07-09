import {Router} from "express";
import { deleteUser, getUserListings, login,refreshToken, register, signOut, updateUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").put(verifyJWT,updateUser);
router.route("/delete/:id").delete(verifyJWT,deleteUser);
router.route("/signout").get(verifyJWT,signOut);
router.route("/listings/:id").get(verifyJWT,getUserListings);
router.route("/refresh-token").post(verifyJWT,refreshToken);


export default router;
