import express from 'express';
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Database connection established successfully")
});

const app = express();
app.use(express.json());

export default app;