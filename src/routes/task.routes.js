import express, { Router } from "express"
import { getTask,getTasks, createTasks, updateTasks, deleteTasks } from "../controller/task.controller.js";
import { requiredAuth } from "../middleWares/tokenvalidation.js";

const router = Router();

router.get('/tasks',requiredAuth, getTasks);
router.get('/task/:id',requiredAuth, getTask);
router.post('/task',requiredAuth, createTasks);
router.put('/task/:id',requiredAuth, updateTasks);
router.delete('/task/:id',requiredAuth, deleteTasks);

export default router;
