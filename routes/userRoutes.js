const express = require('express');
const {getUsers,getUser,addUser,updateUser,deleteUser} = require('./../controllers/userControllers')

const router = express.Router();

router
    .route('/')
    .get(getUsers)
    .post(addUser);
router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;