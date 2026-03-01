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
  const url = `https://www.bluesouljourneys.com/${locale}/journeys`;
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
