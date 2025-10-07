CREATE TABLE IF NOT EXISTS "fanf_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"slug" varchar NOT NULL,
	"image" varchar NOT NULL,
	"description" varchar NOT NULL,
	"services" varchar NOT NULL,
	"organization_options" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
