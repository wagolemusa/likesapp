import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
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

export default mongoose.models.Message ||
mongoose.model("Mesasge", messageSchema)



