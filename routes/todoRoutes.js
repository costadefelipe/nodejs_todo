const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get("/test", todoController.test);

//POST 
router.post("/create", todoController.create);
router.get("/", todoController.todoShow);
router.get("/:id",todoController.todoDetalhes);
router.put("/:id/update", todoController.todoAtualizar);
router.delete("/:id/delete", todoController.todoDeletar);

module.exports = router;