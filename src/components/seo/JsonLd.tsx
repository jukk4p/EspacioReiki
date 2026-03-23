export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Espacio Reiki con Carmen Rocío",
    "image": "https://espacioreiki.tumejortarifaluz.es/images/logo.png",
    "url": "https://espacioreiki.tumejortarifaluz.es",
    "telephone": "+34600000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida de España, 41",
      "addressLocality": "Dos Hermanas",
      "addressRegion": "Sevilla",
      "postalCode": "41701",
      "addressCountry": "ES"
    },
    "description": "Centro de terapias naturales en Dos Hermanas. Especialistas en Reiki Usui, sanación energética y armonización de chakras en Sevilla.",
    "priceRange": "€€",
    "openingHours": "Mo-Fr 10:00-20:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.2831,
      "longitude": -5.9238
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
