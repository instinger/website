import express from "express";
import {verifyJWT} from "../middleware/auth.middleware.js";
import {createListing,deleteListing,updateListing,getListing} from "../controllers/listing.controllers.js";


const router = express.Router();

router.route("/create").post(verifyJWT,createListing);
router.route("/delete/:id").delete(verifyJWT,deleteListing);
router.route("/update/:id").put(verifyJWT,updateListing);
router.route("/get/:id").get(verifyJWT,getListing);



export default router;
