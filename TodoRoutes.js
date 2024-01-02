const { Router } = require("express");
const router = Router();
const { getTodo, saveTodoList, deleteTodo, editTodo } = require("./TodoController")

router.get("/", getTodo);

router.post("/saveTodoList", saveTodoList);

router.post("/deleteTodo", deleteTodo);

router.post("/editTodo", editTodo)

module.exports = router;