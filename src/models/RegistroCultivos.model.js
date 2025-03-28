import mongoose from 'mongoose';

const registroSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    cultivation:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    files:{
        type: String,
        required: true,
    },
},{
    timestamps: true
});

export default mongoose.model("Registro_Cultivos", registroSchema);