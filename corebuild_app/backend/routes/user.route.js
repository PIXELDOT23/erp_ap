// Import Modules
import { Router } from "express";

// Import User Controller
import {
    Register_User,
    Login_User,
    Logout_User,
    User_Profile
} from '../controller/user.controller.js';

// Import Auth Middleware
import { protectRoute } from "../middleware/auth.middleware.js";

// Prop Variable
const router = Router();

// User Routes

// Register Route
router.post('/register', Register_User);

// Login Route
router.post('/login', Login_User);

// Logout Route
router.post('/logout', Logout_User);

// User Profile
router.get('/profile', protectRoute, User_Profile);


// Export Router
export default router;