const express = require('express');
const router = express.Router(); 
const multer = require("multer");
const upload = multer(); 

const { Authentication } = require("../controllers/authentication")
const taskController = require("../controllers/task-controller")

router.get("/get", Authentication, taskController.getDataCall)
router.post('/post/json', Authentication, taskController.josnPostData)
router.post('/post/form', upload.none(), Authentication, taskController.formDataPost)

module.exports = router; 