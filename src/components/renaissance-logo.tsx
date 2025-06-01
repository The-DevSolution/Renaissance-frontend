import Image from "next/image";

export default function RenaissanceLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/renaissance-logo.jpg"
      alt="Renaissance Logo"
      width={24}
      height={24}
      aria-label="Renaissance Logo"
      className={`rounded-full ${className}`}
      priority
    />
  );
}
