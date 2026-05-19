import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // DEPARTURE atau ARRIVAL
    const search = searchParams.get('search') || '';

    if (type && type !== 'DEPARTURE' && type !== 'ARRIVAL') {
      return NextResponse.json(
        { success: false, error: "Invalid flight type specification" },
        { status: 400 }
      );
    }

    const flights = await prisma.flight.findMany({
      where: {
        AND: [
          type ? { type: type as any } : {},
          {
            OR: [
              { flightNumber: { contains: search, mode: 'insensitive' } },
              { destination: { contains: search, mode: 'insensitive' } },
              { airline: { contains: search, mode: 'insensitive' } }
            ]
          }
        ]
      },
      orderBy: {
        scheduleTime: 'asc'
      },
      include: {
        terminal: {
          select: { name: true, code: true }
        }
      }
    });

    return NextResponse.json({ success: true, timestamp: new Date(), data: flights }, { status: 200 });
  } catch (error) {
    console.error("[CRITICAL_API_FLIGHTS_ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal systems operational failure" },
      { status: 500 }
    );
  }
}
