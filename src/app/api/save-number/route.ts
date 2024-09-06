import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PhoneNumber from '@/models/PhoneNumber';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { number } = body;

    if (!number) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    await connectToDatabase();

    const existingNumber = await PhoneNumber.findOne({ number });
    if (existingNumber) {
      return NextResponse.json({ error: 'Phone number already exists' }, { status: 409 });
    }

    const newPhoneNumber = new PhoneNumber({ number });
    await newPhoneNumber.save();

    return NextResponse.json({ message: 'Phone number saved successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error saving phone number:', error);
    return NextResponse.json({ error: 'Failed to save phone number' }, { status: 500 });
  }
}
