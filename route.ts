import { NextResponse } from 'next/server';
export function GET() {
 const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ashish — Blog</title><link>https://example.com/blog/</link><description>Notes on data, economics and research.</description></channel></rss>`;
 return new NextResponse(xml,{headers:{'Content-Type':'application/rss+xml'}});
}
