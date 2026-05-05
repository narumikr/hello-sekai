import { SekaiBackground } from "@naru/untitled-ui-library";
import { SmartPhoneLayout } from "@/components/layouts/SmartPhone";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmartPhoneLayout>
      <SekaiBackground bgOpacity={0.5} />
      {children}
    </SmartPhoneLayout>
  );
}
