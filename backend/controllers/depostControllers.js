import Point from  "../../backend/model/point"
// Assuming Users model is defined using Mongoose
import Users from "../../backend/model/user"; // Adjust the import path as needed
import message from "../model/message";

export const newDeposit = async (req, res) => {
    try {
        const { username, steps, amount } = req.body;

        // Find user by email and select the 'account' field
        const userAccount = await Users.findOne({ email: username }).select("account");

        if (!userAccount) {
            return res.status(404).json({ error: "User not found" });
        }

        const updatedAccount = Number(userAccount.account) + Number(amount);

        // Update user's account balance
        await Users.findOneAndUpdate(
            { email: username },
            { $set: { account: updatedAccount, links: steps } }
        );

        // Create a new deposit record
        const deposit = new Point({
            username,
            steps,
            amount
        });

        await deposit.save();

        return res.status(201).json({ deposit });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



// Query Deposits

export const getDeposits =  async(req, res) => {

    const deposits =  await Point.find()

    if(!deposits){
        return res.status(401).json({
            message: "No Depost find"
        })
    }
    return res.status(201).json({
        deposits
    })
}



