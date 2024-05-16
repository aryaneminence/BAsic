const express=require('express')
const router=express.Router()
const User=require('../controller/users')
const Auth=require('../controller/auth')

router.post('/adduser',User.addUser)
router.get('/alluser',User.allUser)
router.get('/getuser/:id',User.getUser)
router.put('/edituser/:id',User.editUser)
router.delete('/deluser/:id',User.delUser)



router.post('/reg',Auth.register)
router.post('/log',Auth.login)



module.exports=router