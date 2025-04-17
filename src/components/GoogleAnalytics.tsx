'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA4_TRACKING_ID) {
      const url = pathname + searchParams.toString();
      window.gtag('config', process.env.NEXT_PUBLIC_GA4_TRACKING_ID, {
        page_path: url,
        debug_mode: true 
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}