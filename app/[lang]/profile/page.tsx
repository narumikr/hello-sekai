import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import {
  type ApplicationIconItem,
  applicationIcons,
} from "./application.constant";
import { ProfileGrid } from "./ProfileGrid";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const icons = dict["profile-page"].icons;
  const items: ApplicationIconItem[] = applicationIcons.map((icon) => ({
    ...icon,
    label: icons[icon.id as keyof typeof icons].label,
  }));

  return (
    <main className="flex min-h-screen items-center justify-center py-12">
      <ProfileGrid items={items} />
    </main>
  );
}
