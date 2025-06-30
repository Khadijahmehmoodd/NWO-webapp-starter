import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types_db';

// Create Supabase client for server-side operations
export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,

        set: async (name: string, value: string, options: CookieOptions) => {
          try {
            await cookieStore.set({ name, value, ...options });
          } catch {
            // Error ignored (e.g., Server Component call without access)
          }
        },

        remove: async (name: string, options: CookieOptions) => {
          try {
            await cookieStore.set({ name, value: '', ...options });
          } catch {
            // Error ignored (e.g., Server Component call without access)
          }
        },
      },
    },
  );
};

export async function getSession() {
  const supabase = await createClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  } catch {
    // console.error('Error getting session:', error); // Disabled for lint
    return null;
  }
}
