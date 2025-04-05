import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    res.json({ message: 'Login successful', user: { email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
