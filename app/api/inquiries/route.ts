import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

// 1. GET: PROTECTED (Khusus Admin Authenticated)
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data inquiry." },
      { status: 500 }
    );
  }
}

// 2. POST: PUBLIC (Tetap bisa diakses oleh Contact Form Public)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newInquiry = await prisma.inquiry.create({
      data: {
        fullName: body.fullName || body.nama,
        email: body.email,
        company: body.company || body.perusahaan,
        phone: body.phone || body.whatsapp,
        service: body.service || body.layanan,
        message: body.message || body.pesan,
        status: "Baru",
      },
    });
    return NextResponse.json({ success: true, data: newInquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengirimkan inquiry." },
      { status: 500 }
    );
  }
}

// 3. PATCH: PROTECTED (Khusus Admin Authenticated)
export async function PATCH(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    const updated = await prisma.inquiry.update({
      where: { id: Number(id) },
      data: { status },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal memperbarui status inquiry." },
      { status: 500 }
    );
  }
}

// 4. DELETE: PROTECTED (Khusus Admin Authenticated)
export async function DELETE(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID tidak ditemukan" }, { status: 400 });
    }

    await prisma.inquiry.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menghapus inquiry." },
      { status: 500 }
    );
  }
}