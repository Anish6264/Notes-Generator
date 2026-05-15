import UserModel from "../models/user.model.js";
import { generateToken } from "../utils/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await UserModel.findOne({ email });
        if(!user){
            user = await UserModel.create({name,email})
        }
        let token = await generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({ message: "Authentication successful", user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error("Error in googleAuth:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}   