"use client";

import { IntoTheSekai } from "@naru/untitled-ui-library";
import { useRouter } from "next/navigation";

interface IntoSekaiProps {
  children: React.ReactNode;
}

export const IntoSekai = ({ children }: IntoSekaiProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <div>
      {children}
      <IntoTheSekai execEvent={handleClick} />
    </div>
  );
};
