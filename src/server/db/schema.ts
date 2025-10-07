// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  uuid,
  varchar,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `fanf_${name}`);
export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);


export const contact = createTable(
  "contactus",
  {
    id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
    name: varchar("name"),
    email: varchar("email").notNull(),
    phoneNumber: varchar("phone_number", { length: 15 }),
    question: varchar("question").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    
  },
)

export const events = createTable(
  "events",
  {
    id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
    name: varchar("name"),
    slug: varchar("slug").notNull(),
    image: varchar("image").notNull(),
    description: varchar("description").notNull(),
    services: varchar("services").notNull(),
    phone: varchar("phone").notNull(),
    organizationOptions: text("organization_options").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    
  },
)