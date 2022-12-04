const { Thought, User } = require("../models");

const thoughtController = {
    // Getting all thoughts 
    

    async getAllThoughts(req, res) {
        try {
          const dbThought = await Thought.find({}).populate({ path: "reactions", select: "-__v" }).select("-__v");
          if (!dbThought) return res.status(400).json({ message: "Bad Request!" });
          res.json(dbThought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
       // Creating a thought
    async createThought({ body }, res) {
        try {
          const dbThought = await Thought.create(body);
          const dbUser = await User.findOneAndUpdate({ _id: body.userId }, { $push: { thoughts: dbThought.id } }, { new: true });
          res.json({ dbThought, dbUser, message: "A thought was successfully created" });
        } catch (err) {
          res.status(500).json(err);
        }
      }
    };
    
