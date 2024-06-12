import mongoose from "mongoose";

const pointsSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },

})

export default mongoose.models.Point || 
mongoose.model("Point", pointsSchema)
