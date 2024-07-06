import NextAuth, { NextAuthOptions } from "next-auth"
import SupabaseAdapter from "@next-auth/supabase-adapter"

export const authOptions: NextAuthOptions = {
  providers: [
    // Add providers here (e.g., Google, GitHub)
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
}

export default NextAuth(authOptions)
