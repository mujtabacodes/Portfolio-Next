import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';
import prisma from '@/db';

export const POST = async (req: any, res: any) => {
  const formData = await req.formData();
  console.log(formData);
  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name.replaceAll(' ', '_')}`;
  console.log(filename);
  const techstack = JSON.parse(formData.get('techstack'));

  const directoryPath = path.join(process.cwd(), 'public/uploads/testimonails');
  const filePath = path.join(directoryPath, filename);

  try {
    await mkdir(directoryPath, { recursive: true });
  } catch (mkdirError) {
    console.error('Error creating directory:', mkdirError);
    throw mkdirError;
  }

  try {
    await writeFile(filePath, buffer);

    await prisma.testimonials.create({
      data: {
        username: formData.get('username'),
        review: formData.get('review'),
        image: filename,
        linkedin: formData.get('linkedin'),
      },
    });
    return NextResponse.json({ Message: 'Success', status: 200 });
  } catch (error) {
    console.log('Error occured ', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
};

export const GET = async () => {
  try {
    const testimonials = await prisma.testimonials.findMany();

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    console.error('Error occurred: ', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 },
    );
  }
};
