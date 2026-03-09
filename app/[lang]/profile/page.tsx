import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import { Profile } from "./Profile";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const apps = (await getDictionary(lang))["profile-page"].apps;
  const dialog = (await getDictionary(lang))["profile-page"].dialog;

  return (
    <main className="flex min-h-screen items-center justify-center py-12">
      <Profile apps={apps} dialog={dialog} />
    </main>
  );
}
