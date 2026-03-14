// api/admin/login.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env.local explicitly
config({ path: resolve(process.cwd(), '.env.local') });

const ADMIN_USERNAME = process.env.ADMIN_USERNAME!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { username, password } = req.body;

  console.log('ENV CHECK:', {
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD?.substring(0, 20) + '...',
    jwt: JWT_SECRET?.substring(0, 10) + '...'
  });

  if (username !== ADMIN_USERNAME) {
    console.log('Username mismatch:', username, '!==', ADMIN_USERNAME);
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  let isValid = false;
  
  if (ADMIN_PASSWORD?.startsWith('$2')) {
    isValid = await bcrypt.compare(password, ADMIN_PASSWORD);
    console.log('Bcrypt compare:', isValid);
  } else {
    isValid = password === ADMIN_PASSWORD;
    console.log('Plain compare:', isValid);
  }

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ role: 'admin', username }, JWT_SECRET, { expiresIn: '1h' });
  return res.status(200).json({ token });
}