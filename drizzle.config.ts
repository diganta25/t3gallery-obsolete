import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  // driver: "pg",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;



// import { defineConfig } from 'drizzle-kit'
// export default defineConfig({
//  schema: schema: "./src/server/db/schema.ts",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DB_URL,
//   },
//   verbose: true,
//   strict: true,
// })