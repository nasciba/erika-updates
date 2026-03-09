"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ImageDetailKeyboardNavProps {
  prevHref: string | null;
  nextHref: string | null;
}

export function ImageDetailKeyboardNav({
  prevHref,
  nextHref,
}: ImageDetailKeyboardNavProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === "ArrowLeft" && prevHref) {
        e.preventDefault();
        router.push(prevHref);
      } else if (e.key === "ArrowRight" && nextHref) {
        e.preventDefault();
        router.push(nextHref);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevHref, nextHref]);

  return null;
}
