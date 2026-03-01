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
  const siteUrl = "https://www.bluesouljourneys.com";
  const url = `${siteUrl}/${locale}/my-story`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/my-story`,
        pt: `${siteUrl}/pt/my-story`,
        es: `${siteUrl}/es/my-story`,
        "x-default": `${siteUrl}/en/my-story`,
      },
    },
    openGraph: {
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      url,
      images: [{ url: "/images/my_story1.jpg", width: 1200, height: 630, alt: "My Story — Blue Soul Journeys" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Blue Soul Journeys`,
      description: t("description"),
      images: ["/images/my_story1.jpg"],
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
