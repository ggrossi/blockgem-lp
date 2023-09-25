import './globals.css'

export const metadata = {
  title: 'Blockgem - Unlock the Power of Crypto Arbitrage',
  description: 'Calling all beta testers! Telegram bot covering over 100+ crypto assets and providing real-time prices from 75+ DEXes and CEXes. Elevate your trading experience with our exclusive, user-friendly features.',
  url: 'https://blockgem.co',
  image: 'https://blockgem.co/og.png', // Replace with the URL of your Open Graph image
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.url} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
      </head>
      <body className="font-sans" style={{ fontFamily: 'League Spartan' }}>
        {children}
      </body>
    </html>
  )
}
