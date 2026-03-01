import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhatIDo from "@/components/what-i-do/WhatIDo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.whatIDo" });
  const siteUrl = "https://www.bluesouljourneys.com";
  const url = `${siteUrl}/${locale}/what-i-do`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/what-i-do`,
        pt: `${siteUrl}/pt/what-i-do`,
        es: `${siteUrl}/es/what-i-do`,
        "x-default": `${siteUrl}/en/what-i-do`,
      },
    },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
      images: [{ url: "/images/what_i_do1.avif", width: 1200, height: 630, alt: "What Blue Soul Journeys does" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      images: ["/images/what_i_do1.avif"],
    },
  };
}

export default async function WhatIDoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <WhatIDo />
      <Contact />
      <Footer />
    </main>
  );
}
