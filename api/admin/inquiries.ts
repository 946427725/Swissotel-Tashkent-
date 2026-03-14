// api/admin/inquiries.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env.local
config({ path: resolve(process.cwd(), '.env.local') });

import { db } from '../../db.js';
import { inquiries } from '../../drizzle/schema.js';
import { eq, desc, sql } from 'drizzle-orm';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

function verifyToken(req: VercelRequest): boolean {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return false;
  try { jwt.verify(token, JWT_SECRET); return true; } catch { return false; }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  if (!verifyToken(req)) return res.status(401).json({ error: 'Unauthorized' });

  const page = parseInt(req.query.page as string) || 1;
  const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
  const status = req.query.status as string;
  const offset = (page - 1) * limit;

  try {
    const [countResult, data] = await Promise.all([
      db.select({ count: sql<number>`count(*)::int` }).from(inquiries)
        .where(status && status !== 'all' ? eq(inquiries.status, status as any) : undefined),
      db.select().from(inquiries)
        .where(status && status !== 'all' ? eq(inquiries.status, status as any) : undefined)
        .orderBy(desc(inquiries.createdAt))
        .limit(limit).offset(offset)
    ]);

    return res.status(200).json({
      data,
      pagination: {
        page, limit,
        total: countResult[0]?.count || 0,
        totalPages: Math.ceil((countResult[0]?.count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Query error:', error);
    return res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
}