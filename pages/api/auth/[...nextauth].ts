import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Add your providers here, for example:
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  // Add any additional NextAuth configuration here
})

export { handlers as GET, handlers as POST }
