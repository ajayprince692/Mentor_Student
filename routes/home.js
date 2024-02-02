import  express  from "express";
import HomeController from "../controllers/home.js"
import UserControler from "./mentorStudent_routes.js"

const router=express.Router()

router.use('/',HomeController.homePage);
router.use('/sm',UserControler)

export default router