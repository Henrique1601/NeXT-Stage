import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  className?: string;
}

export function DotPattern({ width = 24, height = 24, className }: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-white/[0.03]", className)}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
          <circle cx={1} cy={1} r={0.8} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
