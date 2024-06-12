import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    textsms: {
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
mongoose.model("Message", messageSchema)



