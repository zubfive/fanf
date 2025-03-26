ALTER TABLE "fanf_contactus" RENAME COLUMN "phoneNumber" TO "phone_number";--> statement-breakpoint
ALTER TABLE "fanf_contactus" ALTER COLUMN "phone_number" SET DATA TYPE varchar(15);