// Import Modules
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

// DB Connection
import pool from './config/db_config.js'

// Env Config
dotenv.config();

// Prop Variables
const app = express();
const port = process.env.PORT || 4000;

// | Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));



// Server Runs
app.listen(port, () => {
    console.log('Listening on port 4000');
})