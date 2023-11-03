import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!exists) {
    const msgNotExist = "User email needs to be pre-registered,\nplease ask an admin.";
    return NextResponse.json({ error: msgNotExist }, { status: 401 });
  } else if (exists.password) {
    const msgAlreadyExist = "User email/password already exists.\nIf you want to reset your password,\nplease ask an admin.";
    return NextResponse.json({ error: msgAlreadyExist }, { status: 403 });
  } else {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: await hash(password, 10),
      },
    });
    return NextResponse.json(user);
  }
}
