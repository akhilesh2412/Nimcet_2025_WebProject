
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const encodedUrl = searchParams.get('url');

  if (!encodedUrl) {
    return new NextResponse('Missing PDF URL', { status: 400 });
  }

  try {
    const pdfUrl = Buffer.from(encodedUrl, 'base64').toString('utf-8');
    
    if (!pdfUrl.startsWith('http')) {
      return new NextResponse('Invalid URL', { status: 400 });
    }

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch PDF from ${pdfUrl}: ${response.status} ${errorText}`);
      return new NextResponse(`Failed to fetch PDF: ${response.status}`, { status: response.status });
    }

    const pdfBuffer = await response.arrayBuffer();

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Length', pdfBuffer.byteLength.toString());
    
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error(`Error proxying PDF from ${encodedUrl}:`, error);
    return new NextResponse('Internal Server Error while proxying PDF', { status: 500 });
  }
}
