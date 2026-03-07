import { AppIconGrid, type AppIconItem } from "@/components/molecules/AppIconGrid";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";

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

  const items: AppIconItem[] = [
    { id: "twitter",   icon: "𝕏",  label: icons.twitter.label },
    { id: "github",    icon: "🐙", label: icons.github.label },
    { id: "instagram", icon: "📸", label: icons.instagram.label },
    { id: "youtube",   icon: "▶️", label: icons.youtube.label },
    { id: "line",      icon: "💬", label: icons.line.label },
    { id: "discord",   icon: "🎮", label: icons.discord.label },
    { id: "tiktok",    icon: "🎵", label: icons.tiktok.label },
    { id: "twitch",    icon: "🟣", label: icons.twitch.label },
    { id: "note",      icon: "📝", label: icons.note.label },
    { id: "zenn",      icon: "🔵", label: icons.zenn.label },
    { id: "spotify",   icon: "🎧", label: icons.spotify.label },
    { id: "steam",     icon: "🎲", label: icons.steam.label },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center py-12">
      <AppIconGrid items={items} />
    </main>
  );
}
