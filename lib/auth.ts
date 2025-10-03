import {
    betterAuth
} from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db/index';
import * as schema from '@/db/schema/auth-schema';
import { nextCookies } from 'better-auth/next-js';
export const auth = betterAuth({

    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: schema,
    }),
    plugins: [nextCookies()],

    emailAndPassword: {
        enabled: true,
        async sendResetPassword() {
            // Send an email to the user with a link to reset their password
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days in seconds
        updateAge: 60 * 60 * 24, // Update session every 24 hours
        cookieCache: {
          enabled: true,
          maxAge: 5 * 60, // 5 minutes
        },
      },
      
      // Advanced options for stability
      advanced: {
        useSecureCookies: process.env.NODE_ENV === "production",
        cookiePrefix: "better-auth",
        crossSubDomainCookies: {
          enabled: false, // Set to true if using subdomains
        },
      },
   
    /** if no database is provided, the user data will be stored in memory.
     * Make sure to provide a database to persist user data **/
});