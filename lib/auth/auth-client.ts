import { createAuthClient } from 'better-auth/client';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH!,
});

export const { signIn, signUp, signOut, useSession } = authClient;
