// Import Modules
import { compare, hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';


// DB Connection
import pool from '../config/db_config.js'
import jwt from "jsonwebtoken";


// Register Controller
export const Register_User = async (req, res) => {
    try {

        // Getting users profile from frontend
        const { user_name, user_password, user_phone, user_email, user_designation } = req.body;


        // Check Existing user
        const UserExists = await pool.query(
            "SELECT * FROM user_profile WHERE user_email = $1",
            [ user_email ]
        );


        if (UserExists.rows.length > 0) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Encoding Password
        const Encode_password = await hash(user_password, 10);

        // Generate UUID
        const user_secret = process.env.JWT_SECRET;

        console.log(UserExists.rows.length > 0);

        // Create a user
        const newUser = await pool.query(
            "INSERT INTO user_profile ( full_name, user_email, phone, user_password, user_designation ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [ user_name, user_email, user_phone, Encode_password, user_designation ]
        );

        console.log(newUser.rows[0]);

        const {user_id} = newUser.rows[0];

        // Generate JWT Tokens for payloads
        const payload = {
            id: user_id,
            user: user_name,
            role: user_designation
        }

        const accessToken = jwt.sign(payload, user_secret, { expiresIn: '7d' });

        const refreshToken = jwt.sign(payload, user_secret, { expiresIn: '15m' });

        // Set Cookie
        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        });

        res.status(200).json({ msg: "User Created Successfully", user_data: newUser.rows[0] });

    } catch (err) {

        console.log("Error On Registering User: " + err);

        res.status(400).json("Error On Registering User: " + err);

    }
};

// Login Controller
export const Login_User = async (req, res) => {

    try {

        // Getting users profile from frontend
        const {  user_email, user_password, user_designation } = req.body;

        // Generate UUID
        const user_secret = process.env.JWT_SECRET;

        // Get a user
        const userData = await pool.query(
            "SELECT * FROM user_profile WHERE user_email = $1",
            [ user_email ]
        );

        if (userData.rows.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        const User = userData.rows[0];

        console.log(User);

        // Decoding Password
        const Decode_password = await compare(user_password, User.user_password.toString());

        console.log(Decode_password);

        // Check Designation
        const Check_Designation = user_designation ===  User.user_designation;

        console.log(Check_Designation);

        // Password Decode
        if (Decode_password && Check_Designation) {

            // Generate JWT Tokens for payloads
            const payload = {
                id: User.user_id,
                user: User.full_name,
                email: User.user_email,
                phone: User.phone,
                role: User.user_designation
            }

            const Login_accessToken = jwt.sign(payload, user_secret, { expiresIn: '15m' });

            const Login_refreshToken = jwt.sign(payload, user_secret, { expiresIn: '7d' });

            // Set Cookie
            res.cookie('access_token', Login_accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000
            });

            res.cookie('refresh_token', Login_refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.status(200).json({ msg: "User Login Successfully",  id: User.user_id, name: User.user_name, email: User.user_email, phone: User.phone, role: User.user_designation });

        } else {

            res.status(401).json({ msg: "User Password Do not match Or Select Correct Designation" });

        }

    } catch (err) {

        console.log("Error On Login User: " + err);

        res.status(400).json("Error On Login User: " + err.message);

    }

};

// Logout Controller
export const Logout_User = async (req, res) => {
    try {

        const refreshToken = req.cookies.refresh_token;

        const accessToken = req.cookies.access_token;


        if (refreshToken || accessToken) {

            try {

                if (refreshToken)
                {

                    const Decoded_Refresh = jwt.verify(refreshToken, process.env.JWT_SECRET);

                }

                if (accessToken)
                {

                    const Decoded_Access = jwt.verify(accessToken, process.env.JWT_SECRET);

                }

            } catch (e) {

                console.warn("Token Verification Failed " + e.message);

            }

            // Clear Cookies
            res.clearCookie('refresh_token');

            res.clearCookie('access_token');

            res.status(200).json({ msg: "Logout Successfully" });

        }

    } catch (err) {

        console.log("Error On Logout User: " + err);

    }
};

// User Profile Controller
export const User_Profile = async (req, res) => {

    try {

        res.status(200).json({ msg: "Welcome", user: req.user });

    } catch (err) {

        res.status(400).json({ msg: "Error On User Profile", error: err });

    }

}