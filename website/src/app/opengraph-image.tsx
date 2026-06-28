import { ImageResponse } from 'next/og'

export const alt = 'TermUI — TypeScript framework for terminal user interfaces'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Default social card for the whole site. Pages without their own
// opengraph-image inherit this one. Dark terminal aesthetic, green accent.
export default function OgImage() {
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
                    background: '#0a0a12',
                    backgroundImage:
                        'radial-gradient(circle at 20% 18%, rgba(0,255,136,0.14), transparent 42%), radial-gradient(circle at 85% 88%, rgba(0,212,255,0.10), transparent 45%)',
                    fontFamily: 'monospace',
                    color: '#e8e8f0',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#00ff88' }} />
                    <div style={{ fontSize: '30px', letterSpacing: '0.18em', color: '#9898b8', textTransform: 'uppercase' }}>
                        termui.io
                    </div>
                </div>

                <div style={{ fontSize: '128px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}>
                    TermUI
                </div>

                <div style={{ fontSize: '44px', color: '#c8c8e0', marginTop: '28px', maxWidth: '900px', lineHeight: 1.25 }}>
                    Build terminal UIs in TypeScript. Own JSX runtime, no React.
                </div>

                <div style={{ display: 'flex', gap: '40px', marginTop: '48px', fontSize: '28px', color: '#00ff88' }}>
                    <span>230 components</span>
                    <span style={{ color: '#3a3a55' }}>/</span>
                    <span>15 packages</span>
                    <span style={{ color: '#3a3a55' }}>/</span>
                    <span>MIT</span>
                </div>
            </div>
        ),
        { ...size },
    )
}
