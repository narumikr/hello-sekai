import { SekaiBackground } from "@naru/untitled-ui-library";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | プロフィール",
  description: "My profile page SEKAI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SekaiBackground bgOpacity={0.5} />
      {children}
    </>
  );
}
