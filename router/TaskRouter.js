import express from "express"
import { checkTask, createTask, deleteTask, updateTask } from "../controller/taskController.js"
import { taskValidator, validateRequest } from "../middlewares/validator/validatorFunctions.js"

const router = express.Router()

router
.route("/").post(taskValidator, validateRequest ,createTask)

router
.route("/").delete(deleteTask)

router
.route("/check").patch(checkTask)

router.route("/update").patch(taskValidator, validateRequest ,updateTask)

export default router;