// Import Modules
import { hash } from 'bcryptjs';

// DB Connection
import pool from '../config/db_config.js'

export const Register_user = async (req, res) => {
    try {

        // Getting users profile from frontend
        const { user_name, user_password, user_phone, user_email, user_designation } = req.body;

        // Encoding Password
        const Encode_password = await hash(user_password, 10);

        // Check Existing user
        const UserExists = await pool.query(
            "SELECT * FROM user_profile WHERE user_email = $1",
            [ user_email ]
        );


        if (UserExists.rows.length > 0) {
            return res.status(400).json({ msg: "User already exists" });
        }

        console.log(UserExists.rows.length > 0);

        // Create a user
        const user = await pool.query(
            "INSERT INTO user_profile ( full_name, user_email, phone, user_password, user_designation ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [ user_name, user_email, user_phone, Encode_password, user_designation ]
        );

        console.log(user.rows[0]);

        res.status(200).json({ msg: "User Created Successfully", user_data: user.rows[0] });

    } catch (err) {

        console.log("Error On Registering User: " + err);

        res.status(400).json("Error On Registering User: " + err);

    }
};