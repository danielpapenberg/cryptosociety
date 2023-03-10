import mongoose from "mongoose";

const coinSchema = new mongoose.Schema({
    profileId: String,
    coinId: String
}, { 
    timestamps: true 
});

let Coins = mongoose.models.coins || mongoose.model("coins", coinSchema);

export default Coins;
