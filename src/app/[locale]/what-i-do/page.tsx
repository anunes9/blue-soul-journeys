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
  const url = `https://www.bluesouljourneys.com/${locale}/what-i-do`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
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
