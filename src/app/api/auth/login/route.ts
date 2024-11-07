import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (username === 'user' && password === 'password') {
        const token = 'example-token';
        const response = NextResponse.json({ success: true, token: token });

        response.cookies.set('new-token', token, { path: '/', httpOnly: true, maxAge: 60 * 2 });

        return response;
    } else {
        return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
}
