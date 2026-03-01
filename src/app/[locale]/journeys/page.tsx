import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import JourneysList from "@/components/journeys/JourneysList";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.journeys" });
  const siteUrl = "https://www.bluesouljourneys.com";
  const url = `${siteUrl}/${locale}/journeys`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/journeys`,
        pt: `${siteUrl}/pt/journeys`,
        es: `${siteUrl}/es/journeys`,
        "x-default": `${siteUrl}/en/journeys`,
      },
    },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
      images: [{ url: "/hero-underwater.jpg", width: 1200, height: 630, alt: "Blue Soul Journeys — dive journeys" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      images: ["/hero-underwater.jpg"],
    },
  };
}

export default async function JourneysPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <JourneysList />
      <Contact />
      <Footer />
    </main>
  );
}
