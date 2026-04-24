import type { Metadata } from 'next';
import { QuoteFlowProvider } from '@/context/QuoteFlowContext';
import { LazyFontLoader } from '@/components/LazyFontLoader';
import '@/global.css';

export const metadata: Metadata = {
  title: 'PolicyPilot – Smart Car Insurance Made Simple',
  description: 'PolicyPilot helps you compare, buy and manage car insurance easily. Get the best quotes, instant policy issuance, and hassle-free claims.',
  keywords: 'car insurance, auto insurance, vehicle insurance India, insurance quotes, PolicyPilot',
  authors: [{ name: 'PolicyPilot' }],
  robots: 'index, follow',
  verification: { google: 'M9WCBURT0o_VBzSO80jvImv4IX0SK1HLjyRxhkg9_iw' },
  openGraph: {
    type: 'website',
    title: 'PolicyPilot – Smart Car Insurance Made Simple',
    description: 'Compare and buy car insurance in minutes with PolicyPilot. Fast, reliable, and affordable.',
    url: 'https://policy-pilot-157386566439.europe-west1.run.app/',
    siteName: 'PolicyPilot',
    locale: 'en_IN',
    images: ['https://policy-pilot-157386566439.europe-west1.run.app/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolicyPilot – Smart Car Insurance Made Simple',
    description: 'Find the best car insurance policies instantly with PolicyPilot.',
    images: ['https://policy-pilot-157386566439.europe-west1.run.app/og-image.jpg'],
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;min-height:max(884px,100dvh)}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.app{min-height:100vh;display:flex;flex-direction:column;background:#f8fafc}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}` }} />
        <link rel="canonical" href="https://policy-pilot-157386566439.europe-west1.run.app/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta name="theme-color" content="#0A2540" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InsuranceAgency',
              name: 'PolicyPilot',
              url: 'https://policy-pilot-157386566439.europe-west1.run.app/',
              logo: 'https://policy-pilot-157386566439.europe-west1.run.app/logo.png',
              description: 'Compare and buy car insurance policies easily with PolicyPilot.',
              areaServed: 'IN',
            }),
          }}
        />
      </head>
      <body>
        <LazyFontLoader />
        <QuoteFlowProvider>
          <div className="app" role="application">
            <a href="#main-content" className="sr-only">Skip to main content</a>
            {children}
          </div>
        </QuoteFlowProvider>
      </body>
    </html>
  );
}
