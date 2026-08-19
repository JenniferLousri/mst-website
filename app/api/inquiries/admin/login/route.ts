import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const envUsername = process.env.ADMIN_USERNAME;
    const envPassword = process.env.ADMIN_PASSWORD;

    if (!envUsername || !envPassword) {
      return NextResponse.json(
        { success: false, error: "Konfigurasi autentikasi server belum lengkap." },
        { status: 500 }
      );
    }

    if (username !== envUsername || password !== envPassword) {
      return NextResponse.json(
        { success: false, error: "Username atau password salah." },
        { status: 401 }
      );
    }

    await createSession();

    return NextResponse.json({ success: true, message: "Login berhasil" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}