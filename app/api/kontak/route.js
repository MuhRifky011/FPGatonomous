import { supabaseServer } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json(
      {
        error: "Data harus berformat JSON",
      },
      {
        status: 400,
      },
    );
  }

  const fullname = String(body.fullname ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const organization = String(body.organization ?? "").trim();
  const phone = String(body.phone ?? "").replace(/\D/g, "");
  const message = String(body.message ?? "").trim();

  if (fullname.length < 2) {
    return Response.json(
      {
        error: "Nama minimal 2 huruf",
      },
      {
        status: 400,
      },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      {
        error: "Alamat email tidak valid",
      },
      {
        status: 400,
      },
    );
  }

  if (phone && (phone.length < 10 || phone.length > 15)) {
    return Response.json(
      {
        error: "Nomor telepon harus berisi 10 sampai 15 angka",
      },
      {
        status: 400,
      },
    );
  }

  if (message.length < 10) {
    return Response.json(
      {
        error: "Pesan minimal 10 karakter",
      },
      {
        status: 400,
      },
    );
  }

  const supabase = supabaseServer();

  const { error } = await supabase.from("kontak").insert({
    fullname,
    email,
    organization: organization || null,
    phone: phone || null,
    message,
  });

  if (error?.code === "23505") {
    return Response.json(
      {
        error: "Email ini sudah pernah mengirim pesan",
      },
      {
        status: 409,
      },
    );
  }

  if (error) {
    console.error("Supabase kontak error:", error);

    return Response.json(
      {
        error: "Server sedang bermasalah, coba lagi nanti",
      },
      {
        status: 500,
      },
    );
  }

  return Response.json(
    {
      pesan: "Pesan berhasil dikirim. Tim kami akan segera menghubungi Anda.",
    },
    {
      status: 201,
    },
  );
}