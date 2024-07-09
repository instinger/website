import express from "express";
import {verifyJWT} from "../middleware/auth.middleware.js";
import {createListing,deleteListing,updateListing,getListing, showListing, getSingleListing} from "../controllers/listing.controllers.js";



const router = express.Router();

router.route("/create").post(verifyJWT,createListing);
router.route("/delete/:id").delete(verifyJWT,deleteListing);
router.route("/update/:id").put(verifyJWT,updateListing);
router.route("/get/:id").get(verifyJWT,getListing);
router.route("/get").get(showListing);
router.route("/:id").get(getSingleListing);



export default router;
