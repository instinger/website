import {Router} from "express";
import { deleteUser, getUserListings, login, register, signOut, updateUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").put(verifyJWT,updateUser);
router.route("/delete/:id").delete(verifyJWT,deleteUser);
router.route("/signout").get(verifyJWT,signOut);
router.route("/listings/:id").get(verifyJWT,getUserListings);




export default router;