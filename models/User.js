// const { nanoid, customAlphabet } = require("nanoid");
const mongoose = require("mongoose");

// const uniqueNano = customAlphabet('1234567890abcdef', 15);

const UserSchema = new mongoose.Schema({
    // uniqueid: {
    //     type: String,
    //     trim: true,
    //     default: uniqueNano
    // },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"]
    },
    name: {
        type: String,
        trim: true,
        required:  [true, "Name is required"]
    },
    active: {
        type: String,
        default: "Y"
    },
    },  {timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' } });

module.exports = mongoose.model("User", UserSchema);