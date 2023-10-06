"use client";
import * as RadixVisuallyHidden from "@radix-ui/react-visually-hidden";

export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <RadixVisuallyHidden.Root className="sm:hidden">
      {children}
    </RadixVisuallyHidden.Root>
  );
}
