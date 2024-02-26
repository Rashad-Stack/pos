import React from "react";
import { Button } from "./ui/button";

export default function AppButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant="secondary"
      className="flex w-full items-center justify-center gap-2 bg-indigo-200 text-base text-indigo-700"
    >
      {children}
    </Button>
  );
}
