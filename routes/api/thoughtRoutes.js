const router = require("express").Router();

// Sets the requirements //

const { 
    getAllThoughts, 
    createThought, 
    getSingleThought, 
    updateSingleThought, 
    removeThought, 
    addReaction, 
    removeReaction
 } = require ("../../controllers/thoughtController");

// Gets all thoughts and posts it //
router.Route("/").get(getAllThoughts).post(createThought);

// Gets, updates, and deletes a thought //
router.Route("/:id").get(getSingleThought).put(updateSingleThought).delete(removeThought);

// Creates a reaction with the thought ID //
router.Route("/:thoughtId/reactions").post(addReaction);

// Deletes a reaction with the reaction ID //
router.Route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

