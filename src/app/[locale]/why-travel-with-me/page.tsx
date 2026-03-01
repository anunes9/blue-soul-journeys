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
  const url = `https://www.bluesouljourneys.com/${locale}/why-travel-with-me`;
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
