CREATE TYPE "public"."inquiry_status" AS ENUM('pending', 'contacted', 'resolved', 'archived');--> statement-breakpoint
CREATE TABLE "inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"arrival_date" varchar(50),
	"departure_date" varchar(50),
	"guests" integer DEFAULT 1,
	"room_type" varchar(100),
	"message" text,
	"ip_address" varchar(45),
	"status" "inquiry_status" DEFAULT 'pending',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "email_idx" ON "inquiries" USING btree ("email");--> statement-breakpoint
CREATE INDEX "status_created_at_idx" ON "inquiries" USING btree ("status","created_at" DESC NULLS LAST);