
const router = require("express").Router();

// set the requirements once the user controllers are set up
const { 

    getAllUsers, 
    createUser, 
    getSingleUser, 
    updateSingleUser, 
    removeUser, 
    addFriend, 
    removeFriend
} = require ("../../controllers/userController");


// get all users and create new user
router.route("/").get(getAllUsers).post(createUser);

// Get, update, and delete, user 
router.route("/:id").get(getSingleUser).put(updateSingleUser).delete(removeUser);

// add and remove friends with user ID and friend ID
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;