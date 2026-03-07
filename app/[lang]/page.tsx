import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import { IntoSekai } from "./entry";

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

  return (
    <main className="flex min-h-screen items-center justify-center">
      <IntoSekai>
        <h1 className="text-4xl font-bold text-miku">
          {dict["entry-page"].greeting}
        </h1>
        <div className="mt-4 text-sm text-center animate-pulse">
          <span className="block lg:hidden">
            {dict["entry-page"]["tap-to-start"]}
          </span>
          <span className="hidden lg:block animate-pulse">
            {dict["entry-page"]["click-to-start"]}
          </span>
        </div>
      </IntoSekai>
    </main>
  );
}
