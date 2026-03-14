// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_pj8m3JqeoYtb@ep-sweet-dawn-alwsjfgj-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  },
});