import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));