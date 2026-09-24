import { ImageResponse } from 'next/og';

// Default social card for every route (referenced via SITE.ogImage in lib/seo.js).
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'AdEtc Studios — Film & Video Production Studio in Ahmedabad';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0d0d0d',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: '-2px' }}>
          AdEtc Studios
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: '#c8ff00' }}>
          Film &amp; Video Production Studio
        </div>
        <div style={{ fontSize: 32, marginTop: 12, color: '#bdbdbd' }}>
          Ahmedabad, India
        </div>
      </div>
    ),
    size
  );
}
