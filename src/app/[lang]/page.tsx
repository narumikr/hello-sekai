import { FileMusic } from "lucide-react";
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
    <main className="flex h-dvh items-center justify-center">
      <IntoSekai>
        <div className="flex justify-center flex-col items-center">
          <FileMusic size={96} className="text-ichika" />
          <span className="block mt-2 text-2xl font-bold text-ichika text-center">
            {dict["entry-page"]["untitled-wav"]}
          </span>
        </div>
        <div className="mt-8 text-sm text-center animate-pulse text-saki">
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
