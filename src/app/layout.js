import { Analytics } from '@vercel/analytics/react';
import './globals.css'

export const metadata = {
  title: 'Blockgem - Unlock the Power of Crypto Arbitrage',
  description: 'Calling all beta testers! Telegram bot covering over 100+ crypto assets and providing real-time prices from 75+ DEXes and CEXes. Elevate your trading experience with our exclusive, user-friendly features.',
  url: 'https://blockgem.co',
  image: 'https://blockgem.co/og.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.url} />
        <meta name="robots" content="index, follow" />
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

        {/* Twitter Pixel Code */}
        <script>
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','ofnig');
        </script>

      </head>
      <body className="font-sans" style={{ fontFamily: 'League Spartan' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
