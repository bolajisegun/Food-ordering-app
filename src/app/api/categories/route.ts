import { prisma } from '@/utils/connect';
import { NextResponse } from 'next/server';

// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(
      JSON.stringify({ message: 'all categories', data: categories }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
