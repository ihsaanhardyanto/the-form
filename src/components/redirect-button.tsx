"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RedirectButton() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/signIn");
  };

  return <Button onClick={handleRedirect}>Sign Up</Button>;
}
