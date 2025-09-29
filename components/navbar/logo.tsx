import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-4">
    <Image
      src="/coco-logo.png"
      alt="Coco Logo"
      width={48}
      height={48}
      className="w-12 h-12"
    />
    <span className="text-2xl font-playfair font-bold text-foreground">Coco AI</span>
  </div>
);
