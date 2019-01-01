const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create post schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  designation: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  workingHours: {
    type: Number
  },
  qualification: {
    type: String
  },
  experience: {
    type: Number
  },
  perks: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  applicants: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
