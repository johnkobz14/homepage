const User = require("../models/user");

// @desc    Get current user
// @route   GET /api/hp/user
// @access  Public 
exports.getUser = async (req, res, next) => {

    try {
        const user = await User.find();

        return res.status(200).json({
            success: true,
            count: user.length,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }

};

// @desc    Add a user
// @route   POST /api/hp/user
// @access  Public 
exports.addUser = async (req, res, next) => {
    const filter = { email: "johnkobz@gmail.com" };
    try {
        const {email, name} = req.body;
        const user = await User.findOneAndUpdate(filter, req.body, {
            new: true,
            upsert: true 
          });
    
        return res.status(201).json({
            success: true,
            data: user
        });
    

    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
      
            return res.status(400).json({
              success: false,
              error: messages
            });
            
          } else {
            return res.status(500).json({
              success: false,
              error: 'Server Error'
            });
          }
    }

};