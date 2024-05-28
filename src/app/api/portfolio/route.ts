import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import prisma from "@/db";


export const POST = async (req: any, res: any) => {
  const formData = await req.formData();
  console.log(formData);
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  const techstack = JSON.parse(formData.get("techstack"));
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    await prisma.portfolio.create({
      data: {
        name: formData.get("name"),
        description: formData.get("description"),
        image: filename,
        live_url: formData.get("live_url"),
        github_url: formData.get("github_url"),
        techstack: techstack
      }
    });
    return NextResponse.json({ Message: "Success", status: 200 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};


