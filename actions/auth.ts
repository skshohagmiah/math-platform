'use server';

import { signIn } from "@/auth";

export const signInWithGoole = async() => {
    await signIn('google');
}