import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import MyStoryContent from "@/components/my-story/MyStoryContent";
import MyStoryHero from "@/components/my-story/MyStoryHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.myStory" });
  const url = `https://www.bluesouljourneys.com/${locale}/my-story`;
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

export default async function MyStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <MyStoryHero />
      <MyStoryContent />
      <Contact />
      <Footer />
    </main>
  );
}
