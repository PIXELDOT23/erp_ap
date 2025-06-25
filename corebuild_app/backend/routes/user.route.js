// Import Modules
import { Router } from "express";

// Import User Controller
import {
    Register_user
} from '../controller/user.controller.js';

// Prop Variable
const router = Router();

// User Routes

// Register Route
router.post('/register', Register_user);


// Export Router
export default router;