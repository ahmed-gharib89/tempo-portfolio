"use client";

import { Button } from "./ui/button";
import { ArrowDownCircle } from "lucide-react";

interface ProfileHeroButtonProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
  elementId: string;
  children: React.ReactNode;
}

export function ProfileHeroButton({
  variant = "default",
  className = "",
  elementId,
  children,
}: ProfileHeroButtonProps) {
  const handleClick = () => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}

export function ScrollDownButton({ elementId }: { elementId: string }) {
  const handleClick = () => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant="ghost"
      className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0"
      onClick={handleClick}
    >
      <ArrowDownCircle className="w-10 h-10" />
    </Button>
  );
}
