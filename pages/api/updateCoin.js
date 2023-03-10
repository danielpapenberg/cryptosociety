import connectDB from "../../lib/connectDB";
import Coins from "../../lib/coinSchema";

export default async (req, res) => {
 
    const { coinId } = req.body;

    await connectDB();

    try {
        await Coins.findOneAndUpdate({ coinId: coinId });
        res.status(200).json({ coinId });
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }

};
