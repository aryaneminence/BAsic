const express=require('express')
const router=express.Router()
const User=require('../controller/users')
const Auth=require('../controller/auth')

const multer = require("multer");

const uploadFiles=require('../controller/upload')
const upload = multer({ dest: "uploads/" });


router.post('/adduser',User.addUser)
router.get('/alluser',User.allUser)
router.get('/getuser/:id',User.getUser)
router.put('/edituser/:id',User.editUser)
router.delete('/deluser/:id',User.delUser)


router.post('/reg',Auth.register)
router.post('/log',Auth.login)

router.post("/upload_files", upload.array("files"), uploadFiles);


module.exports=router