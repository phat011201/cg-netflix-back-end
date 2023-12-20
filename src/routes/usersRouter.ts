// usersRouter.ts

// import modules
import express from "express";

// import users controller
import usersController from "../controllers/usersController";

// initialize router
const router = express.Router();

// define routes
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.addUser);
router.put("/:id", usersController.updateUser);

// export router
export default router;
