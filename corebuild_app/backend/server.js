// Import Modules
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

// Import Routes
import UserRoutes from './routes/user.route.js';

// Env Config
dotenv.config();

// Prop Variables
const app = express();
const port = process.env.PORT || 4000;

// | Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));

// API Routs

// User Route
app.use('/api/auth', UserRoutes);

// Server Runs
app.listen(port, () => {
    console.log('Listening on port 4000');
})