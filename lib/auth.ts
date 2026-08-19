import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const validToken = process.env.ADMIN_SESSION_TOKEN;

  if (!validToken || !token) return false;
  return token === validToken;
}

export async function createSession() {
  const cookieStore = await cookies();
  const token = process.env.ADMIN_SESSION_TOKEN;

  if (!token) {
    throw new Error("ADMIN_SESSION_TOKEN belum dikonfigurasi di .env");
  }

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}