
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pdfUrl = searchParams.get('url');

  if (!pdfUrl) {
    return new NextResponse('Missing PDF URL', { status: 400 });
  }

  try {
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
    console.error(`Error proxying PDF from ${pdfUrl}:`, error);
    return new NextResponse('Internal Server Error while proxying PDF', { status: 500 });
  }
}
