import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.howItWorks" });
  const siteUrl = "https://www.bluesouljourneys.com";
  const url = `${siteUrl}/${locale}/how-it-works`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/how-it-works`,
        pt: `${siteUrl}/pt/how-it-works`,
        es: `${siteUrl}/es/how-it-works`,
        "x-default": `${siteUrl}/en/how-it-works`,
      },
    },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
      images: [{ url: "/images/image_how_i_work.jpg", width: 1200, height: 630, alt: "How Blue Soul Journeys works" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      images: ["/images/image_how_i_work.jpg"],
    },
  };
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
