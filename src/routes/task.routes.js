import express, { Router } from "express"
import { getTask,getTasks, createTasks, updateTasks, deleteTasks } from "../controller/task.controller.js";
import { requiredAuth } from "../middleWares/tokenvalidation.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middleWares/validator.midelware.js";

const router = Router();

router.get('/tasks',requiredAuth, getTasks);
router.get('/task/:id',requiredAuth, getTask);
router.post('/task',requiredAuth,validateSchema(createTaskSchema) ,createTasks);
router.put('/task/:id',requiredAuth, updateTasks);
router.delete('/task/:id',requiredAuth, deleteTasks);

export default router;
