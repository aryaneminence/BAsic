const express=require('express')
const router=express.Router()
const User=require('../controller/users')

router.post('/adduser',User.addUser)
router.get('/alluser',User.allUser)
router.get('/getuser/:id',User.getUser)
router.put('/edituser/:id',User.editUser)
router.delete('/deluser/:id',User.delUser)



module.exports=router