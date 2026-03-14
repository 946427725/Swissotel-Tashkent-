import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../../../db.js';
import { inquiries } from '../../../drizzle/schema.js';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

function verifyToken(req: VercelRequest): boolean {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return false;
  try { jwt.verify(token, JWT_SECRET); return true; } catch { return false; }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, PATCH, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!verifyToken(req)) return res.status(401).json({ error: 'Unauthorized' });

  const id = parseInt(req.query.id as string);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    if (req.method === 'DELETE') {
      const result = await db.delete(inquiries).where(eq(inquiries.id, id)).returning({ id: inquiries.id });
      if (result.length === 0) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json({ success: true });
    }

    if (req.method === 'PATCH') {
      const { status } = req.body;
      if (!['pending', 'contacted', 'resolved', 'archived'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
      const result = await db.update(inquiries).set({ status }).where(eq(inquiries.id, id))
        .returning({ id: inquiries.id, status: inquiries.status });
      if (result.length === 0) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json({ success: true, updated: result[0] });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Database operation failed' });
  }
}