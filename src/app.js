import express from 'express';
import morgan from 'morgan';
import cookieParse from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import registroRuotes from './routes/RegistrosCultivos.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());

app.use("/api", authRoutes);
app.use("/api", registroRuotes);


export default app;