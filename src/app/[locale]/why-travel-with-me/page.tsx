import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhyTravelWithMe from "@/components/why-travel-with-me/WhyTravelWithMe";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.whyTravelWithMe",
  });
  const siteUrl = "https://www.bluesouljourneys.com";
  const url = `${siteUrl}/${locale}/why-travel-with-me`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/why-travel-with-me`,
        pt: `${siteUrl}/pt/why-travel-with-me`,
        es: `${siteUrl}/es/why-travel-with-me`,
        "x-default": `${siteUrl}/en/why-travel-with-me`,
      },
    },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
      images: [{ url: "/images/image_why_travel_with_me.jpg", width: 1200, height: 630, alt: "Why travel with Blue Soul Journeys" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      images: ["/images/image_why_travel_with_me.jpg"],
    },
  };
}

export default async function WhyTravelWithMePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <WhyTravelWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
