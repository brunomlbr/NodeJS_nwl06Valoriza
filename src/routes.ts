import { Router } from "express";

import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
// router.use(ensureAdmin)
// geralmente o nome do recurso é adotado no plural
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);

export { router };
