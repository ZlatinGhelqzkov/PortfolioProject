import '../styles/global.scss'
import '@brainhubeu/react-carousel/lib/style.css';
import Head from 'next/head'

import App from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router: { asPath } } = this.props;

    // Next.js currently does not allow trailing slash in a route.
    // This is a client side redirect in case trailing slash occurs.
    if (asPath.length > 1 && asPath.endsWith('/')) {
      const urlWithoutEndingSlash = asPath.replace(/\/*$/gim, '');

      if (typeof window !== 'undefined') {
        window.location.replace(urlWithoutEndingSlash);
      }
      return null;
    }

    return (
      <div className="App">
        <Head>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html:
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "name": "Rongo - Hosting Services",
              "image": "../public/LogoHeader.svg",
              "@id": "",
              "url": "http://bdf0a72fd508.ngrok.io/",
              "telephone": "+359899217332",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Usta Kolyu Ficheto 25, 9009 Zapad, Varna",
                "addressLocality": "Varna",
                "postalCode": "9010",
                "addressCountry": "BG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.217080,
                "longitude": 27.871767
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "16:00"
              }
            }) }}>
          </script>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html:
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Host Rongo.Ltd",
              "url": "http://bdf0a72fd508.ngrok.io/",
              "logo": "../public/LogoHeader.svg",
              "sameAs": [
                "https://www.facebook.com/HostRongo",
                "https://www.twitter.com/HostRongo",
                "https://www.instagram.com/HostRongo",
                "https://www.linkedin.com/HostRongo",
                "http://bdf0a72fd508.ngrok.io/"
              ]
            }) }}>
          </script>


          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <title>Host Rongo - Quick & Secure Web Hosting</title>
          <meta
            name="description"
            content="We provide Quick and secure web hosting, such as Shared hosting, Cloud servers, VPS hosting and Domains."
          />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
