// drizzle/schema.ts
import { pgTable, serial, varchar, text, integer, timestamp, pgEnum, index } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('inquiry_status', ['pending', 'contacted', 'resolved', 'archived']);

export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  arrivalDate: varchar('arrival_date', { length: 50 }),
  departureDate: varchar('departure_date', { length: 50 }),
  guests: integer('guests').default(1),
  roomType: varchar('room_type', { length: 100 }),
  message: text('message'),
  ipAddress: varchar('ip_address', { length: 45 }),
  status: statusEnum('status').default('pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  emailIdx: index('email_idx').on(table.email),
  statusCreatedAtIdx: index('status_created_at_idx').on(table.status, table.createdAt.desc()),
}));