"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resume.pdf");
  }, [router]);
  return null;
} 