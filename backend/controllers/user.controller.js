import UserModel from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await UserModel.findById(userId).select("-credits -__v");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }     
      return res.status(200).json({ user });              
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}