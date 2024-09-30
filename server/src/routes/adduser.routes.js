import { Router } from "express";

import {addUser, allUser, editUser, oneUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/add").post(addUser);
router.route("/edit/:id").patch(editUser);

router.route("/all").get(allUser);
router.route("/:id").get(oneUser);



export default router;