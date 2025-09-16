import { pgTable, text, timestamp ,uuid} from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const data = pgTable("data",{
    id:text("id").primaryKey(),
    userId:text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    profile:text("profile").default(''),
    name:text("name").notNull(),
    bio:text("bio"),
  
   
    createdAt:timestamp("created_at").notNull(),
    updatedAt:timestamp("updated_at").notNull(),
})
export const links = pgTable("links",{
    id:text("id").primaryKey(),
    userId:text("data_id_link").notNull().references(() => data.id, { onDelete: "cascade" }),
    title:text("title").notNull(),
    link:text("link").notNull(),
    createdAt:timestamp("created_at").notNull(),
    updatedAt:timestamp("updated_at").notNull(),
})
export const theme = pgTable("theme",{
    id:text("id").primaryKey(),
    productId:text('productid').references(()=>data.id, { onDelete: "cascade" }),
    userId:text('user_id').references(()=>user.id, { onDelete: "cascade" }),
    theme:text('theme'),
    fontStyle:text('fontStyle'),
    textcolor:text('textcolor'),
    backgroundColor:text('backgroundColor'),


})