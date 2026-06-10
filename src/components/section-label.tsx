import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <span className="text-[#D4A853] text-xs font-mono tracking-widest">{number}</span>
      <span className="h-[1px] w-8 bg-[#D4A853]/30" />
      <span className="text-white/40 text-xs uppercase tracking-[0.15em] font-medium">{label}</span>
    </div>
  );
}
