import { SekaiBackground } from "@naru/untitled-ui-library";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-180 mx-auto px-4">
      <SekaiBackground bgOpacity={0.5} />
      {children}
    </div>
  );
}
