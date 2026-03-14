import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../db.js';
import { inquiries } from '../drizzle/schema.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { fullName, email, phone, arrivalDate, departureDate, guests, roomType, message, honeypot } = req.body;

  if (honeypot) return res.status(400).json({ error: 'Spam detected' });
  if (!fullName || !email) return res.status(400).json({ error: 'Name and email required' });

  const ipAddress = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown')
    .toString().split(',')[0].trim().substring(0, 45);

  try {
    const result = await db.insert(inquiries).values({
      fullName,
      email,
      phone: phone || null,
      arrivalDate: arrivalDate || null,
      departureDate: departureDate || null,
      guests: guests ? parseInt(guests) : 1,
      roomType: roomType || null,
      message: message || null,
      ipAddress,
      status: 'pending',
    }).returning({ id: inquiries.id });

    return res.status(200).json({ success: true, inquiryId: result[0].id });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to save inquiry' });
  }
}