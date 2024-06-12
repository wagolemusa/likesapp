import mongoose from "mongoose";

const stepSchema = mongoose.Schema({

    like: {
        type: String,
        required: true,
    },
    step: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    createAt: {
        type: Date,
        default: Date.now,
    }
  
})

export default mongoose.models.Step ||
mongoose.model("Step", stepSchema)

