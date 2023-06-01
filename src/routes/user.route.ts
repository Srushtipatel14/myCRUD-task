const express= require("express");
import userController from "../controllers/user.controller";
const router= express.Router();
import validation from "../middlewares/user.validation";

router.post("/create",validation.userValidation,userController.createUser);
router.get("/getdata",userController.getAllUser);
router.put("/update/:id",validation.updateUserValidation,userController.upDateData);
router.delete("/delete/:id",userController.getDelete);


export default router;
