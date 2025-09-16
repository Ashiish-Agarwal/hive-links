CREATE TABLE "theme" (
	"id" text PRIMARY KEY NOT NULL,
	"productid" text,
	"user_id" text,
	"theme" text,
	"fontStyle" text,
	"textcolor" text,
	"backgroundColor" text
);
--> statement-breakpoint
ALTER TABLE "theme" ADD CONSTRAINT "theme_productid_data_id_fk" FOREIGN KEY ("productid") REFERENCES "public"."data"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "theme" ADD CONSTRAINT "theme_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;